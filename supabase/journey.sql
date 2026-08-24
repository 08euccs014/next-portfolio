-- Additive: run this if you already applied supabase/schema.sql.
-- Fresh installs can run schema.sql (which now includes these tables).

create table if not exists public.experiences (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  company text not null default '',
  location text not null default '',
  period text not null default '',
  employment_type text not null default 'Full-time',
  description text not null default '',
  achievements jsonb not null default '[]'::jsonb,
  technologies jsonb not null default '[]'::jsonb,
  icon text not null default 'Code',
  gradient text not null default 'from-[#4A4E8C] to-[#6366F1]',
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.certifications (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  organization text not null default '',
  year text not null default '',
  expiry text not null default '',
  description text not null default '',
  skills jsonb not null default '[]'::jsonb,
  icon text not null default 'Award',
  color text not null default 'bg-[#FF9900]',
  verified boolean not null default true,
  published boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.journey_stats (
  id uuid primary key default gen_random_uuid(),
  label text not null,
  value text not null default '',
  icon text not null default 'Calendar',
  sort_order integer not null default 0
);

drop trigger if exists experiences_set_updated_at on public.experiences;
create trigger experiences_set_updated_at
  before update on public.experiences
  for each row
  execute function public.set_projects_updated_at();

drop trigger if exists certifications_set_updated_at on public.certifications;
create trigger certifications_set_updated_at
  before update on public.certifications
  for each row
  execute function public.set_projects_updated_at();

alter table public.experiences enable row level security;
alter table public.certifications enable row level security;
alter table public.journey_stats enable row level security;

drop policy if exists "Public can read published experiences" on public.experiences;
create policy "Public can read published experiences"
  on public.experiences for select to anon, authenticated
  using (published = true);

drop policy if exists "Authenticated can read all experiences" on public.experiences;
create policy "Authenticated can read all experiences"
  on public.experiences for select to authenticated using (true);

drop policy if exists "Authenticated can insert experiences" on public.experiences;
create policy "Authenticated can insert experiences"
  on public.experiences for insert to authenticated with check (true);

drop policy if exists "Authenticated can update experiences" on public.experiences;
create policy "Authenticated can update experiences"
  on public.experiences for update to authenticated using (true) with check (true);

drop policy if exists "Authenticated can delete experiences" on public.experiences;
create policy "Authenticated can delete experiences"
  on public.experiences for delete to authenticated using (true);

drop policy if exists "Public can read published certifications" on public.certifications;
create policy "Public can read published certifications"
  on public.certifications for select to anon, authenticated
  using (published = true);

drop policy if exists "Authenticated can read all certifications" on public.certifications;
create policy "Authenticated can read all certifications"
  on public.certifications for select to authenticated using (true);

drop policy if exists "Authenticated can insert certifications" on public.certifications;
create policy "Authenticated can insert certifications"
  on public.certifications for insert to authenticated with check (true);

drop policy if exists "Authenticated can update certifications" on public.certifications;
create policy "Authenticated can update certifications"
  on public.certifications for update to authenticated using (true) with check (true);

drop policy if exists "Authenticated can delete certifications" on public.certifications;
create policy "Authenticated can delete certifications"
  on public.certifications for delete to authenticated using (true);

drop policy if exists "Public can read journey stats" on public.journey_stats;
create policy "Public can read journey stats"
  on public.journey_stats for select to anon, authenticated using (true);

drop policy if exists "Authenticated can insert journey stats" on public.journey_stats;
create policy "Authenticated can insert journey stats"
  on public.journey_stats for insert to authenticated with check (true);

drop policy if exists "Authenticated can update journey stats" on public.journey_stats;
create policy "Authenticated can update journey stats"
  on public.journey_stats for update to authenticated using (true) with check (true);

drop policy if exists "Authenticated can delete journey stats" on public.journey_stats;
create policy "Authenticated can delete journey stats"
  on public.journey_stats for delete to authenticated using (true);
