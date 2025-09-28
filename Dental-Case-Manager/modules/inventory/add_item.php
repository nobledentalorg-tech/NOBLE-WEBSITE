<?php
require_once '../../config/db_connect.php';
require_once '../../core/auth.php';
require_once '../../core/functions.php';
require_once '../../core/audit_logger.php';

checkLogin();
allowRole(['Admin','StoreManager']);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $item_name = sanitize($_POST['item_name']);
    $category  = sanitize($_POST['category']);
    $quantity  = intval($_POST['quantity']);
    $unit      = sanitize($_POST['unit']);
    $reorder   = intval($_POST['reorder_level']);
    $supplier  = sanitize($_POST['supplier']);

    if (!$item_name || !$quantity) {
        alert("Item name and quantity are required.", "danger");
    } else {
        $stmt = $pdo->prepare("INSERT INTO inventory_items 
            (item_name, category, quantity, unit, reorder_level, supplier_name) 
            VALUES (?,?,?,?,?,?)");
        $stmt->execute([$item_name, $category, $quantity, $unit, $reorder, $supplier]);

        logAction($_SESSION['user_id'], "Add Invent_]()_
