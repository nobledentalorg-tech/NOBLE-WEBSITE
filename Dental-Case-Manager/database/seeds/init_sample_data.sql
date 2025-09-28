-- =====================================
-- Noble Dental Care – Sample Demo Data
-- =====================================

-- 👩‍🦰 Add Sample Patient
INSERT INTO patients (reg_no, full_name, gender, dob, phone, email, address, allergies)
VALUES (
  'ND-0001',
  'Jane Doe',
  'Female',
  '1995-07-12',
  '9876543210',
  'jane.doe@example.com',
  'Nallagandla, Hyderabad',
  'Penicillin'
);

-- 🦷 Create Sample Case
INSERT INTO cases (patient_id, diagnosis, status, doctor_id)
VALUES (
  1,  -- First patient
  'Dental caries – requiring root canal therapy',
  'Ongoing',
  2   -- Doctor (Dr. Dhivakaran)
);

-- 📅 Schedule Sample Appointment
INSERT INTO appointments (patient_id, doctor_id, appointment_date, status, notes)
VALUES (
  1, 
  2, 
  DATE_ADD(NOW(), INTERVAL 1 DAY),
  'Scheduled',
  'Initial consultation and diagnosis confirmation.'
);

-- 💊 Create Sample Prescription
INSERT INTO prescriptions (patient_id, doctor_id, medications, instructions)
VALUES (
  1,
  2,
  'Amoxicillin 500mg – 1 capsule every 8 hours for 5 days.\nParacetamol 500mg – 1 tablet every 6 hours as needed for pain.',
  'Take medications after meals. Avoid cold foods. Maintain oral hygiene.'
);

-- 💊 Detailed Items for Prescription
INSERT INTO prescriptions_items (prescription_id, drug_name, dose, frequency, duration, remarks)
VALUES
(1, 'Amoxicillin 500mg', '1 Capsule', 'Every 8 hours', '5 days', 'Take after meals'),
(1, 'Paracetamol 500mg', '1 Tablet', 'Every 6 hours', 'As needed', 'For pain relief');

-- 💰 Sample Payment Record
INSERT INTO payments (patient_id, case_id, amount, method, status)
VALUES (1, 1, 2500.00, 'UPI', 'Paid');

-- 🧾 Add Audit Log
INSERT INTO audit_logs (user_id, action, ip_address)
VALUES (1, 'Inserted sample data for demo view', '127.0.0.1');
