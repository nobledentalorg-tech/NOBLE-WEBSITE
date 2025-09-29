<?php
/**
 * SEED LOADER
 * ----------------------------------------
 * Imports initial data into the database
 * - Roles / Sample Users
 * - Patients / Demo Cases (if available)
 *
 * Usage: Run via browser → /database/seed_loader.php
 */

ini_set('display_errors', 1);
error_reporting(E_ALL);

// ============================
// DB CONNECTION
// ============================
$host = 'localhost';
$db   = 'dental_case_manager';
$user = 'root';         // ⚙️ Change if needed
$pass = '';             // ⚙️ Set your MySQL password
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
  PDO::ATTR_EMULATE_PREPARES   => false,
];

try {
  $pdo = new PDO($dsn, $user, $pass, $options);
} catch (Exception $e) {
  die("<h3>❌ Database Connection Failed:</h3><pre>" . $e->getMessage() . "</pre>");
}

// ============================
// SEED FILES
// ============================
$seedDir = __DIR__;
$seedFiles = [
  "$seedDir/init_roles.sql",
  "$seedDir/init_sample_data.sql"
];

echo "<h2>🦷 Noble Dental Case Manager – Database Seeder</h2>";
echo "<p>Database: <strong>$db</strong></p><hr>";

foreach ($seedFiles as $file) {
  if (!file_exists($file)) {
    echo "<p style='color:red;'>⚠️ Missing file: $file</p>";
    continue;
  }

  try {
    $sql = file_get_contents($file);
    $pdo->exec($sql);
    echo "<p style='color:green;'>✅ Seeded successfully from: <strong>" . basename($file) . "</strong></p>";
  } catch (Exception $e) {
    echo "<p style='color:red;'>❌ Error seeding " . basename($file) . ": " . $e->getMessage() . "</p>";
  }
}

echo "<hr><p>🎉 Database seeding completed.</p>";
echo "<p>👉 You can now log in using default admin credentials: <code>admin@nobledental.in</code></p>";
?>
