<?php
/**
 * EXPORTER.PHP
 * --------------------------------------
 * Centralized export utility for reports, datasets, and patient records.
 */

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

/**
 * Export associative data as JSON.
 * @param string $filename  Base name (no extension)
 * @param mixed $data       Array/object to encode
 * @param string $subdir    Target subdirectory
 */
function exportToJSON(string $filename, $data, string $subdir = 'json_datasets') {
    $dir = __DIR__ . "/../exports/$subdir";
    if (!is_dir($dir)) mkdir($dir, 0755, true);

    $path = "$dir/{$filename}.json";
    file_put_contents($path, json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    return $path;
}

/**
 * Export tabular data as CSV.
 * @param string $filename
 * @param array $headers
 * @param array $rows
 * @param string $subdir
 */
function exportToCSV(string $filename, array $headers, array $rows, string $subdir = 'reports') {
    $dir = __DIR__ . "/../exports/$subdir";
    if (!is_dir($dir)) mkdir($dir, 0755, true);

    $path = "$dir/{$filename}.csv";
    $fp = fopen($path, 'w');
    fputcsv($fp, $headers);
    foreach ($rows as $row) fputcsv($fp, $row);
    fclose($fp);

    return $path;
}

/**
 * Export a single patient summary JSON.
 */
function exportPatientSummary(array $patientData, string $subdir = 'patient_records') {
    $dir = __DIR__ . "/../exports/$subdir";
    if (!is_dir($dir)) mkdir($dir, 0755, true);

    $file = $dir . '/Patient_' . preg_replace('/\s+/', '_', $patientData['full_name']) . '.json';
    file_put_contents($file, json_encode($patientData, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    return $file;
}
?>
