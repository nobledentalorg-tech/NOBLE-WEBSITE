<?php
/**
 * Global Constants
 * ----------------
 * Roles, paths, enumerations.
 */

define('APP_NAME', 'Dental Case Manager');
define('APP_VERSION', '1.0.0');
define('BASE_URL', 'http://localhost/Dental-Case-Manager'); // change when hosted

// Roles
define('ROLE_ADMIN', 'Admin');
define('ROLE_DOCTOR', 'Doctor');
define('ROLE_RECEPTION', 'Receptionist');
define('ROLE_PATIENT', 'Patient');

// Upload paths (relative to root)
define('UPLOAD_DIR', __DIR__ . '/../assets/uploads/');
define('PATIENT_FILES', UPLOAD_DIR . 'patient_files/');
define('XRAY_REPORTS', UPLOAD_DIR . 'xray_reports/');
define('CONSENT_FORMS', UPLOAD_DIR . 'consent_forms/');

// Enums
const CASE_STATUS = ['Open', 'Ongoing', 'Closed'];
const GENDER_TYPES = ['Male', 'Female', 'Other'];

// Date & time formats
define('DATE_FORMAT', 'Y-m-d');
define('DATETIME_FORMAT', 'Y-m-d H:i:s');
?>

