-- Create the inquiries table
create table inquiries (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  organization text,
  email text not null,
  inquiry_type text,
  message text,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table inquiries enable row level security;

-- Allow full access for the service role (used by the API route)
create policy "Service role has full access"
  on inquiries
  for all
  using (true)
  with check (true);
