-- OmniVerse secure authentication and admin foundation
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  display_name text,
  role text not null default 'user' check (role in ('user', 'admin')),
  created_at timestamptz not null default now()
);

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  insert into public.profiles (id, email, display_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'display_name', ''),
    'user'
  )
  on conflict (id) do update
    set email = excluded.email,
        display_name = excluded.display_name;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.profiles
    where id = (select auth.uid()) and role = 'admin'
  );
$$;

alter table public.profiles enable row level security;

drop policy if exists "Users can read own profile" on public.profiles;
create policy "Users can read own profile"
on public.profiles for select
to authenticated
using (id = (select auth.uid()) or public.is_admin());

drop policy if exists "Admins can update profiles" on public.profiles;
create policy "Admins can update profiles"
on public.profiles for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

-- Content tables are managed only by admins. Public visitors may read published content.
create table if not exists public.catalog_items (
  id uuid primary key default gen_random_uuid(),
  section text not null check (section in ('movies', 'anime', 'games')),
  title text not null,
  category text,
  release_year integer,
  rating numeric(3,1),
  description text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.study_resources (
  id uuid primary key default gen_random_uuid(),
  subject text not null,
  course_code text,
  title text not null,
  description text,
  resource_url text,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.catalog_items enable row level security;
alter table public.study_resources enable row level security;

drop policy if exists "Anyone can read published catalog items" on public.catalog_items;
create policy "Anyone can read published catalog items"
on public.catalog_items for select
to anon, authenticated
using (is_published = true or public.is_admin());

drop policy if exists "Admins manage catalog items" on public.catalog_items;
create policy "Admins manage catalog items"
on public.catalog_items for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "Anyone can read published study resources" on public.study_resources;
create policy "Anyone can read published study resources"
on public.study_resources for select
to anon, authenticated
using (is_published = true or public.is_admin());

drop policy if exists "Admins manage study resources" on public.study_resources;
create policy "Admins manage study resources"
on public.study_resources for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

grant select on public.profiles to authenticated;
grant update on public.profiles to authenticated;
grant select on public.catalog_items, public.study_resources to anon, authenticated;
grant insert, update, delete on public.catalog_items, public.study_resources to authenticated;
