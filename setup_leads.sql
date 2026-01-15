-- Create the leads table ensuring it's open for public inserts (Self-Check)
-- Added 'location' and 'phone' text fields for War Room Analytics (Area Targeting)

create table if not exists public.leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  name text,
  phone text,       -- Contact Details
  location text,    -- Area Details (e.g. Nallagandla, Tellapur)
  intake_data jsonb,
  triage_result jsonb
);

-- Enable RLS
alter table public.leads enable row level security;

-- Allow ANYONE to insert (Public Lead Capture)
create policy "Enable insert for all users" 
on public.leads 
for insert 
with check (true);

-- Allow ONLY Service Role (Admin) to view/edit
-- (No SELECT policy for public means they can insert but not see other people's data)
