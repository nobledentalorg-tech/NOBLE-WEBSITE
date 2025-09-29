-- ==========================================================
-- Noble Dental Care – Initial Users / Roles Seed Data
-- ==========================================================

-- 👨‍⚕️ Admin User
INSERT INTO users (full_name, email, password, role)
VALUES (
  'Dr. Admin',
  'admin@nobledental.in',
  '$2y$10$ExampleHashedPass12345678901234567890',
  'Admin'
);

-- 👨‍⚕️ Doctor User
INSERT INTO users (full_name, email, password, role)
VALUES (
  'Dr. Dhivakaran',
  'doctor@nobledental.in',
  '$2y$10$ExampleHashedPass12345678901234567890',
  'Doctor'
);

-- 🧑‍💼 Receptionist User
INSERT INTO users (full_name, email, password, role)
VALUES (
  'Front Desk',
  'reception@nobledental.in',
  '$2y$10$ExampleHashedPass12345678901234567890',
  'Receptionist'
);
