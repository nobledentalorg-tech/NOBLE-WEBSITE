<?php
/**
 * DOSAGE RULES ENGINE
 * -------------------------------------------------------
 * Auto-computes safe dose range for common drugs based on:
 * - Age group
 * - Body weight (kg)
 * - Treatment severity
 * Returns structured JSON for frontend or API use
 */

header('Content-Type: application/json');
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

// ----------------------------
// Collect input (JSON or GET)
// ----------------------------
$input = json_decode(file_get_contents('php://input'), true);
$drug = strtolower(trim($input['drug'] ?? ($_GET['drug'] ?? '')));
$age  = (float)($input['age'] ?? ($_GET['age'] ?? 0));
$weight = (float)($input['weight'] ?? ($_GET['weight'] ?? 0));
$severity = strtolower(trim($input['severity'] ?? ($_GET['severity'] ?? 'mild')));

// ----------------------------
// Knowledge base (mg/kg/day)
// ----------------------------
$rules = [
  "amoxicillin" => [
    "mg_per_kg" => 40,  // mg/kg/day (divided doses)
    "max_daily" => 3000,
    "adult_std" => "500 mg TDS",
    "notes" => "Use 40–45 mg/kg/day divided q8h for children."
  ],
  "paracetamol" => [
    "mg_per_kg" => 15,
    "max_daily" => 4000,
    "adult_std" => "500 mg TDS",
    "notes" => "Do not exceed 4 g/day in adults."
  ],
  "ibuprofen" => [
    "mg_per_kg" => 10,
    "max_daily" => 2400,
    "adult_std" => "400 mg TDS after meals",
    "notes" => "Avoid in gastritis or renal impairment."
  ],
  "metronidazole" => [
    "mg_per_kg" => 15,
    "max_daily" => 2000,
    "adult_std" => "400 mg TDS",
    "notes" => "Use cautiously in hepatic disease."
  ],
  "cetirizine" => [
    "mg_per_kg" => 0.25,
    "max_daily" => 10,
    "adult_std" => "10 mg OD (HS)",
    "notes" => "Sedation possible. Adjust in renal impairment."
  ]
];

// ----------------------------
// Validate input
// ----------------------------
if (!$drug || !isset($rules[$drug])) {
  echo json_encode(["error" => "Drug not found in dosage rules."], JSON_PRETTY_PRINT);
  exit;
}

// ----------------------------
// Calculate dose logic
// ----------------------------
$rule = $rules[$drug];
$daily_mg = 0;
$dose_text = "";

// Pediatric / weight-based dosing
if ($weight > 0 && $age < 12) {
  $daily_mg = $rule["mg_per_kg"] * $weight;
  if ($daily_mg > $rule["max_daily"]) $daily_mg = $rule["max_daily"];

  // Severity adjustments
  if ($severity === "moderate") $daily_mg *= 1.1;
  if ($severity === "severe")   $daily_mg *= 1.25;

  $dose_text = round($daily_mg / 3) . " mg every 8 hours";
}
// Adult dosing
else {
  $dose_text = $rule["adult_std"];
  if ($severity === "moderate") $dose_text .= " (↑ dose ×1.1)";
  if ($severity === "severe")   $dose_text .= " (↑ dose ×1.25)";
}

// ----------------------------
// Build response
// ----------------------------
$response = [
  "drug" => ucfirst($drug),
  "age" => $age,
  "weight" => $weight,
  "severity" => ucfirst($severity),
  "recommended_dose" => $dose_text,
  "max_daily_mg" => $rule["max_daily"],
  "notes" => $rule["notes"]
];

echo json_encode($response, JSON_PRETTY_PRINT);
exit;
