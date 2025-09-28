-- =====================================
-- Noble Dental Care – Initial Users / Roles
-- =====================================

-- 👨‍⚕️ Admin user
INSERT INTO users (full_name, email, password, role)
VALUES (
  'Dr. Admin',
  'admin@nobledental.in',
  '$2y$10$ExampleHashedPass12345678901234567890',
  'Admin'
);

-- 👨‍⚕️ Doctor user
INSERT INTO users (full_name, email, password, role)
VALUES (
  'Dr. Dhivakaran',
  'doctor@nobledental.in',
  '$2y$10$ExampleHashedPass12345678901234567890',
  'Doctor'
);

-- 🧑‍💼 Receptionist user
INSERT INTO users (full_name, email, password, role)
VALUES (
  'Front Desk',
  'reception@nobledental.in',
  '$2y$10$ExampleHashedPass12345678901234567890',
  'Receptionist'
);
