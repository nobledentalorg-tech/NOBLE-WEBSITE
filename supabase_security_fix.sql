-- SECURITY FIX: Enable RLS on NextAuth tables to prevent public API exposure
-- Service Role (Adapter) bypasses RLS, so this safely secures the tables from the public.

alter table users enable row level security;
alter table accounts enable row level security;
alter table sessions enable row level security;
alter table verification_tokens enable row level security;

-- Optional: Allow users to read their own public profile (if needed later)
-- create policy "Public profiles" on users for select using (true);
