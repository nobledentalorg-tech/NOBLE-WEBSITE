<?php
/**
 * SEED LOADER
 * ----------------------------------------
 * Runs all .sql seed files from /database/seeds/
 * in alphabetical order using PDO connection.
 */

require_once __DIR__ . '/../config/db_connect.php';

echo "<h2 style='font-family:sans-serif;color:#12B2A0;'>🌱 Noble Dental Case Manager – Seed Loader</h2>";

try {
    $seedDir = __DIR__ . '/seeds';
    $files = glob($seedDir . '/*.sql');

    if (empty($files)) {
        echo "<p style='color:red;'>❌ No seed files found in /database/seeds/</p>";
        exit;
    }

    // Sort alphabetically to ensure correct load order
    sort($files);

    foreach ($files as $file) {
        $sql = file_get_contents($file);
        if (trim($sql) === '') continue;

        echo "<p>⏳ Running <strong>" . basename($file) . "</strong> ...</p>";

        try {
            $pdo->exec($sql);
            echo "<p style='color:green;'>✅ Executed successfully</p>";
        } catch (PDOException $e) {
            echo "<p style='color:red;'>⚠️ Error in " . basename($file) . ": " . htmlspecialchars($e->getMessage()) . "</p>";
        }
    }

    echo "<hr><h3 style='color:#12B2A0;'>✅ All seeds executed successfully!</h3>";

} catch (Exception $e) {
    echo "<p style='color:red;'>❌ Seed execution failed: " . htmlspecialchars($e->getMessage()) . "</p>";
}
?>

