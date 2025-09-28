<?php
/**
 * Prescription Rule Engine
 * ------------------------
 * Suggests or blocks drugs based on age, weight, allergies
 */

require_once __DIR__ . '/validator.php';

function canPrescribe($drug, $age, $weight, $allergies = '') {
    // Example rules (expand later)
    $restricted = [
        'aspirin' => ['min_age' => 12],
        'tetracycline' => ['min_age' => 8],
    ];

    // Age restriction
    if (isset($restricted[strtolower($drug)])) {
        if ($age < $restricted[strtolower($drug)]['min_age']) {
            return ['ok' => false, 'reason' => 'Age restriction'];
        }
    }

    // Allergy restriction
    if (checkAllergy($allergies, $drug)) {
        return ['ok' => false, 'reason' => 'Allergy detected'];
    }

    return ['ok' => true, 'reason' => 'Safe'];
}
?>
