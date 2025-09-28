<?php
/**
 * DRUG INTERACTIONS – Noble Dental Care
 * -------------------------------------------------------
 * Detects known drug–drug and drug–substance interactions
 * Used by rule-engine.js or AJAX checks in prescription builder
 */

header('Content-Type: application/json');
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

// 🔹 Get drug list from request
$input = json_decode(file_get_contents('php://input'), true);
$selected = array_map('strtolower', $input['drugs'] ?? []);

// 🔹 Static knowledge base (extendable later from DB)
$interactions = [

  // --- Common Antibiotic conflicts ---
  ["a" => "amoxicillin", "b" => "warfarin", "severity" => "major",
   "message" => "Increased risk of bleeding. Monitor INR closely."],

  ["a" => "metronidazole", "b" => "alcohol", "severity" => "major",
   "message" => "Severe nausea/vomiting with alcohol – strictly avoid."],

  ["a" => "azithromycin", "b" => "warfarin", "severity" => "moderate",
   "message" => "Can potentiate anticoagulant effect."],

  // --- Painkillers & Anti-inflammatories ---
  ["a" => "ibuprofen", "b" => "warfarin", "severity" => "major",
   "message" => "Additive bleeding risk – avoid combination."],

  ["a" => "ibuprofen", "b" => "aspirin", "severity" => "moderate",
   "message" => "May reduce cardioprotective effect of aspirin."],

  ["a" => "ibuprofen", "b" => "prednisolone", "severity" => "moderate",
   "message" => "Higher risk of gastric irritation or ulcer."],

  // --- Antifungals & Antimicrobials ---
  ["a" => "fluconazole", "b" => "statin", "severity" => "major",
   "message" => "Increased statin levels – risk of myopathy."],

  // --- Antihistamines / Sedatives ---
  ["a" => "cetirizine", "b" => "alcohol", "severity" => "moderate",
   "message" => "Enhanced drowsiness and sedation."],

  // --- Local Anesthetics ---
  ["a" => "lidocaine", "b" => "propranolol", "severity" => "moderate",
   "message" => "Can raise lidocaine levels; watch for toxicity."]
];

// 🔍 Check pairwise combinations
$alerts = [];
foreach ($interactions as $rule) {
  $a = strtolower($rule['a']);
  $b = strtolower($rule['b']);

  if (in_array($a, $selected) && in_array($b, $selected)) {
    $alerts[] = [
      "pair" => ucfirst($a) . " + " . ucfirst($b),
      "severity" => ucfirst($rule['severity']),
      "message" => $rule['message']
    ];
  }
}

// ✅ Return results
echo json_encode([
  "count" => count($alerts),
  "alerts" => $alerts
], JSON_PRETTY_PRINT);
exit;
