<?php
/**
 * Input Validation & Allergy Checks
 */

function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function validatePhone($phone) {
    return preg_match('/^[0-9]{10}$/', $phone);
}

function validateDOB($dob) {
    return (bool)strtotime($dob);
}

function checkAllergy($patientAllergies, $drug) {
    $allergies = explode(',', strtolower($patientAllergies));
    return in_array(strtolower($drug), $allergies);
}
?>
