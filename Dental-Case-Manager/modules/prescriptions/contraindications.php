<?php
/**
 * CONTRAINDICATIONS ENGINE
 * -------------------------------------------------------
 * Flags patient-specific restrictions based on:
 * - Age
 * - Pregnancy
 * - Comorbidities (ulcer, renal failure, liver disease, etc.)
 * Used alongside dosage_rules.php and drug_interactions.php
 */

header('Content-Type: application/json');
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

// ----------------------------
// Collect input
// ----------------------------
$input = json_decode(file_get_contents('php://input'), true);
$drug = strtolower(trim($input['drug'] ?? ($_GET['drug'] ?? '')));
$age  = (float)($input['age'] ?? ($_GET['age'] ?? 0));
$pregnant = filter_var(($input['pregnant'] ?? ($_GET['pregnant'] ?? false)), FILTER_VALIDATE_BOOLEAN);
$conditions = array_map('strtolower', $input['conditions'] ?? ($_GET['conditions'] ?? []));

// ----------------------------
// Knowledge base (drug → restrictions)
// ----------------------------
$rules = [
  "tetracycline" => [
    "age" => ["min" => 8, "message" => "Contraindicated in children <8 yrs (tooth discoloration, bone effects)."],
    "pregnancy" => "Avoid during pregnancy (risk to fetal bone/teeth).",
    "conditions" => []
  ],
  "ibuprofen" => [
    "age" => ["min" => 12, "message" => "Not recommended below 12 yrs."],
    "pregnancy" => "Avoid in 3rd trimester (risk of ductus arteriosus closure).",
    "conditions" => [
      "ulcer" => "Avoid in peptic ulcer/gastritis.",
      "renal failure" => "Avoid in renal impairment.",
      "asthma" => "May worsen bronchospasm in sensitive patients."
    ]
  ],
  "metronidazole" => [
    "pregnancy" => "Avoid in 1st trimester of pregnancy.",
    "conditions" => [
      "liver disease" => "Use cautiously in hepatic impairment."
    ]
  ],
  "amoxicillin" => [
    "conditions" => [
      "penicillin allergy" => "Do not use in penicillin hypersensitivity."
    ]
  ],
  "warfarin" => [
    "pregnancy" => "Contraindicated in pregnancy (teratogenic, bleeding risk)."
  ]
];

// ----------------------------
// Validation
// ----------------------------
if (!$drug || !isset($rules[$drug])) {
  echo json_encode(["error" => "No contraindication data for this drug."], JSON_PRETTY_PRINT);
  exit;
}

$rule = $rules[$drug];
$alerts = [];

// Age check
if (isset($rule["age"]["min"]) && $age > 0 && $age < $rule["age"]["min"]) {
  $alerts[] = $rule["age"]["message"];
}

// Pregnancy check
if ($pregnant && isset($rule["pregnancy"])) {
  $alerts[] = $rule["pregnancy"];
}

// Condition check
if (!empty($conditions) && isset($rule["conditions"])) {
  foreach ($conditions as $cond) {
    if (isset($rule["conditions"][$cond])) {
      $alerts[] = $rule["conditions"][$cond];
    }
  }
}

// ----------------------------
// Response
// ----------------------------
echo json_encode([
  "drug" => ucfirst($drug),
  "age" => $age,
  "pregnant" => $pregnant,
  "conditions" => $conditions,
  "alerts" => $alerts,
  "count" => count($alerts)
], JSON_PRETTY_PRINT);
exit;
