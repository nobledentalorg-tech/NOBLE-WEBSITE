<?php
/**
 * DRUG DATABASE (JSON API)
 * -------------------------------------------------------
 * Provides a smart drug list for rule-engine.js
 * Automatically filters/suggests based on age/allergy/diagnosis
 */

header('Content-Type: application/json');
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';

checkLogin();

// 🚀 Option 1: Dynamic (fetch from DB if available)
try {
    $query = $pdo->query("
        SELECT 
            name,
            category,
            dose,
            min_age,
            max_age,
            allergies,
            contraindications,
            notes
        FROM drug_master
        WHERE is_active = 1
    ");

    $rows = $query->fetchAll(PDO::FETCH_ASSOC);
    $data = [];

    foreach ($rows as $r) {
        $data[] = [
            "name" => $r['name'],
            "category" => $r['category'],
            "dose" => $r['dose'],
            "min_age" => (int)($r['min_age'] ?? 0),
            "max_age" => (int)($r['max_age'] ?? 120),
            "allergies" => array_filter(array_map('trim', explode(',', strtolower($r['allergies'] ?? '')))),
            "contraindications" => array_filter(array_map('trim', explode(',', strtolower($r['contraindications'] ?? '')))),
            "notes" => $r['notes'] ?? ''
        ];
    }

    // If DB is empty, fall back to static list
    if (empty($data)) throw new Exception("No data");

} catch (Exception $e) {

    // 🚀 Option 2: Static Fallback (safe defaults)
    $data = [
        [
            "name" => "Amoxicillin",
            "category" => "Antibiotic",
            "dose" => "500 mg BD × 5 days",
            "min_age" => 5,
            "max_age" => 80,
            "allergies" => ["penicillin"],
            "contraindications" => ["renal failure"],
            "notes" => "Avoid in penicillin allergy"
        ],
        [
            "name" => "Paracetamol",
            "category" => "Analgesic / Antipyretic",
            "dose" => "500 mg TDS × 3 days",
            "min_age" => 1,
            "max_age" => 99,
            "allergies" => [],
            "contraindications" => [],
            "notes" => "Safe in most patients"
        ],
        [
            "name" => "Metronidazole",
            "category" => "Antimicrobial",
            "dose" => "400 mg TDS × 5 days",
            "min_age" => 10,
            "max_age" => 80,
            "allergies" => [],
            "contraindications" => ["pregnancy", "liver disease"],
            "notes" => "Avoid in first trimester"
        ],
        [
            "name" => "Ibuprofen",
            "category" => "NSAID",
            "dose" => "400 mg TDS × 3 days after food",
            "min_age" => 12,
            "max_age" => 70,
            "allergies" => ["nsaid"],
            "contraindications" => ["ulcer", "gastritis", "renal failure"],
            "notes" => "Give after meals; avoid gastritis"
        ],
        [
            "name" => "Cetirizine",
            "category" => "Antihistamine",
            "dose" => "10 mg OD (HS)",
            "min_age" => 6,
            "max_age" => 80,
            "allergies" => [],
            "contraindications" => ["glaucoma"],
            "notes" => "May cause mild sedation"
        ]
    ];
}

// ✅ Return JSON to frontend
echo json_encode($data, JSON_PRETTY_PRINT);
exit;
