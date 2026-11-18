# OmniVerse admin setup

## Implemented on this branch
- Supabase browser client and session-aware authentication context.
- Email/password signup, sign-in, sign-out and password-reset email request.
- Protected `/admin` route that checks the database profile role.
- Admin dashboard for adding and deleting published catalog items.
- Database Row Level Security (RLS) policies remain the authorization boundary.

## Connect the Supabase database
1. Open the Supabase project dashboard.
2. In **SQL Editor**, run `supabase/migrations/202611170001_secure_admin.sql`.
3. Confirm the migration created `profiles`, `catalog_items`, and `study_resources`, with RLS enabled.
4. The frontend project URL and publishable key are configured in Vercel as `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` for Production, Preview and Development. Redeploy after merging to production so the build receives the variables.
5. For local development, copy `.env.example` to `.env` and fill in the same two frontend values.
6. Never put a service-role key in frontend code, Vercel VITE variables, or source control.

## Create the first admin safely
1. Register your own account through `/register`.
2. If email confirmation is enabled, confirm the signup email and then sign in once.
3. In Supabase Dashboard → **Authentication → Users**, copy the UUID for your account.
4. In SQL Editor, run the following query after replacing the placeholder with that UUID:
   ```sql
   update public.profiles
   set role = 'admin'
   where id = 'YOUR_AUTH_USER_UUID';
   ```
5. Sign out and sign in again, then open `/admin`. If the role was updated successfully, the Admin link appears in the navigation.
6. Do not expose an admin signup form or allow users to self-assign roles.

## Important
- This branch is not yet merged or deployed.
- The migration must be run in the Supabase SQL Editor before auth and admin features can work.
- The dashboard currently manages catalog entries. Study-resource management and broader analytics can be added in a later phase.
- The RLS policies are the security boundary; hiding admin links in React is not sufficient.
- Browser code uses only the publishable key. Keep all secret/service-role credentials private.
