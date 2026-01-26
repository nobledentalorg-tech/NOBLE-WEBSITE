-- MASTER SETUP SCRIPT (Idempotent / Safe to Run Multiple Times)
-- 1. Enable UUID Extension
create extension if not exists "uuid-ossp";

-- 2. NextAuth Tables
create table if not exists users (
  id uuid not null default uuid_generate_v4() primary key,
  name text,
  email text unique,
  email_verified timestamp with time zone,
  image text
);

create table if not exists accounts (
  id uuid not null default uuid_generate_v4() primary key,
  userId uuid not null references users(id) on delete cascade,
  type text not null,
  provider text not null,
  providerAccountId text not null,
  refresh_token text,
  access_token text,
  expires_at bigint,
  token_type text,
  scope text,
  id_token text,
  session_state text,
  oauth_token_secret text,
  oauth_token text,
  constraint provider_unique unique(provider, providerAccountId)
);

create table if not exists sessions (
  id uuid not null default uuid_generate_v4() primary key,
  sessionToken text not null unique,
  userId uuid not null references users(id) on delete cascade,
  expires timestamp with time zone not null
);

create table if not exists verification_tokens (
  identifier text not null,
  token text not null unique,
  expires timestamp with time zone not null,
  constraint token_unique unique(identifier, token)
);

-- 3. Chat History Tables
create table if not exists chats (
  id uuid not null default uuid_generate_v4() primary key,
  user_id uuid not null references users(id) on delete cascade,
  title text default 'New Conversation',
  created_at timestamp with time zone default now()
);

create table if not exists messages (
  id uuid not null default uuid_generate_v4() primary key,
  chat_id uuid not null references chats(id) on delete cascade,
  role text not null check (role in ('user', 'model', 'system')),
  content text not null,
  timestamp bigint default extract(epoch from now()) * 1000,
  created_at timestamp with time zone default now()
);

-- 4. Blog Posts Table
create table if not exists posts (
    id uuid default gen_random_uuid() primary key,
    title text not null,
    slug text not null unique,
    excerpt text,
    content text,
    cover_image text,
    author text default 'Noble Dental Team',
    tags text[],
    published boolean default true,
    created_at timestamp with time zone default now()
);

-- 5. Row Level Security (RLS) Policies
alter table users enable row level security;
alter table accounts enable row level security;
alter table sessions enable row level security;
alter table verification_tokens enable row level security;
alter table chats enable row level security;
alter table messages enable row level security;
alter table posts enable row level security;

-- AI Chat Policies
drop policy if exists "Users can view own chats" on chats;
create policy "Users can view own chats" on chats for select using (auth.uid() = user_id);

drop policy if exists "Users can create own chats" on chats;
create policy "Users create own chats" on chats for insert with check (auth.uid() = user_id);

drop policy if exists "Users can view messages of own chats" on messages;
create policy "Users can view messages of own chats" on messages for select using (
    exists (select 1 from chats where chats.id = messages.chat_id and chats.user_id = auth.uid())
);

drop policy if exists "Users can insert messages to own chats" on messages;
create policy "Users can insert messages to own chats" on messages for insert with check (
    exists (select 1 from chats where chats.id = messages.chat_id and chats.user_id = auth.uid())
);

-- Public Blog Policies
drop policy if exists "Public can read posts" on posts;
create policy "Public can read posts" on posts for select using (published = true);


