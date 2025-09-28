<?php
/**
 * Authentication Middleware
 * -------------------------
 * Starts session, verifies user login, handles logout.
 */

session_start();

function checkLogin() {
    if (!isset($_SESSION['user_id'])) {
        header("Location: /Dental-Case-Manager/login.php");
        exit;
    }
}

function loginUser($userId, $username, $role) {
    $_SESSION['user_id'] = $userId;
    $_SESSION['username'] = $username;
    $_SESSION['role'] = $role;
}

function logoutUser() {
    session_unset();
    session_destroy();
    header("Location: /Dental-Case-Manager/login.php");
    exit;
}

function isLoggedIn() {
    return isset($_SESSION['user_id']);
}

function currentUserRole() {
    return $_SESSION['role'] ?? null;
}

function currentUserId() {
    return $_SESSION['user_id'] ?? null;
}
?>
