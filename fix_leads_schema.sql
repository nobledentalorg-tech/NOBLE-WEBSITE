-- FIX SCRIPT: Run this to add the missing columns and fix the policy error.

-- 1. Add missing columns safely (does nothing if they already exist)
alter table public.leads add column if not exists phone text;
alter table public.leads add column if not exists location text;

-- 2. Fix the Policy Error by dropping it first, then recreating it
drop policy if exists "Enable insert for all users" on public.leads;

create policy "Enable insert for all users" 
on public.leads 
for insert 
with check (true);

-- 3. Confirm RLS is enabled
alter table public.leads enable row level security;
