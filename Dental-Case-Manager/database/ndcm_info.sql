-- =====================================
-- Noble Dental Case Manager – Core Schema
-- =====================================

CREATE DATABASE IF NOT EXISTS dental_case_manager CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE dental_case_manager;

-- =========================
-- USERS (Doctors / Staff)
-- =========================
CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('Admin','Doctor','Receptionist','Staff') DEFAULT 'Staff',
  designation VARCHAR(100),
  phone VARCHAR(20),
  status ENUM('Active','Inactive') DEFAULT 'Active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Default admin (replace password later)
INSERT INTO users (full_name,email,password,role)
VALUES ('Dr. Admin','admin@nobledental.in', '$2y$10$ExampleHashedPass12345678901234567890', 'Admin');

-- =========================
-- PATIENTS
-- =========================
CREATE TABLE patients (
  patient_id INT AUTO_INCREMENT PRIMARY KEY,
  reg_no VARCHAR(20) UNIQUE,
  full_name VARCHAR(100) NOT NULL,
  gender ENUM('Male','Female','Other'),
  dob DATE,
  phone VARCHAR(15),
  email VARCHAR(100),
  address TEXT,
  allergies TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- =========================
-- CASES
-- =========================
CREATE TABLE cases (
  case_id INT AUTO_INCREMENT PRIMARY KEY,
  patient_id INT NOT NULL,
  diagnosis TEXT,
  status ENUM('Open','Ongoing','Closed') DEFAULT 'Open',
  doctor_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
  FOREIGN KEY (doctor_id) REFERENCES users(user_id)
);

-- =========================
-- APPOINTMENTS
-- =========================
CREATE TABLE appointments (
  appointment_id INT AUTO_INCREMENT PRIMARY KEY,
  patient_id INT NOT NULL,
  doctor_id INT,
  appointment_date DATETIME,
  status ENUM('Scheduled','Completed','Cancelled') DEFAULT 'Scheduled',
  notes TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
  FOREIGN KEY (doctor_id) REFERENCES users(user_id)
);

-- =========================
-- PRESCRIPTIONS
-- =========================
CREATE TABLE prescriptions (
  prescription_id INT AUTO_INCREMENT PRIMARY KEY,
  patient_id INT NOT NULL,
  doctor_id INT NOT NULL,
  medications TEXT,
  instructions TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
  FOREIGN KEY (doctor_id) REFERENCES users(user_id)
);

-- =========================
-- PRESCRIPTION ITEMS
-- =========================
CREATE TABLE prescriptions_items (
  item_id INT AUTO_INCREMENT PRIMARY KEY,
  prescription_id INT NOT NULL,
  drug_name VARCHAR(150),
  dose VARCHAR(100),
  frequency VARCHAR(100),
  duration VARCHAR(100),
  remarks TEXT,
  FOREIGN KEY (prescription_id) REFERENCES prescriptions(prescription_id)
);

-- =========================
-- PAYMENTS
-- =========================
CREATE TABLE payments (
  payment_id INT AUTO_INCREMENT PRIMARY KEY,
  patient_id INT,
  case_id INT,
  amount DECIMAL(10,2),
  method ENUM('Cash','Card','UPI','Other') DEFAULT 'Cash',
  status ENUM('Paid','Pending','Refunded') DEFAULT 'Paid',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (patient_id) REFERENCES patients(patient_id),
  FOREIGN KEY (case_id) REFERENCES cases(case_id)
);

-- =========================
-- AUDIT LOGS
-- =========================
CREATE TABLE audit_logs (
  log_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  action VARCHAR(255),
  ip_address VARCHAR(45),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);
