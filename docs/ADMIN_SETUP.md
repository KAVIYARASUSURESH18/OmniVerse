# OmniVerse admin setup

## What this adds
- Supabase Auth-backed accounts (once the project keys are configured).
- A profile row created automatically for each newly registered user.
- Roles default to `user`; public signup cannot choose or edit a role.
- Admin-only policies for managing catalog and study resources.
- Public read access only to published content.

## Connect Supabase
1. Create a Supabase project at https://supabase.com/dashboard.
2. In SQL Editor, run `supabase/migrations/202611170001_secure_admin.sql`.
3. In Project Settings → API, copy the Project URL and publishable/anon key.
4. Add these Vite environment variables in the local `.env` and Vercel project environment settings:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. Never put a service-role key in frontend code or Vite environment variables.

## Create the first admin safely
1. Register your own account through the normal OmniVerse signup page after Supabase is connected.
2. In Supabase Dashboard → SQL Editor, run the following query with the UUID belonging to your account from Authentication → Users:
   `update public.profiles set role = 'admin' where id = 'YOUR_AUTH_USER_UUID';`
3. Verify that the profile row now has role `admin`.
4. Do not expose an admin signup form or allow users to self-assign roles.

## Security notes
- The database policies are the security boundary; hiding admin links in React is not sufficient.
- The browser receives only the publishable/anon key. Keep service-role credentials private.
- Keep this feature on a preview branch until auth, RLS, and the first admin account are tested.
