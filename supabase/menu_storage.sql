-- Run once in Supabase SQL Editor to enable admin menu-image uploads.
-- The bucket is public for image display on the customer menu.
insert into storage.buckets (id, name, public)
values ('menu-images', 'menu-images', true)
on conflict (id) do update set public = true;

-- Public customers can view menu images.
drop policy if exists "Public can view menu images" on storage.objects;
create policy "Public can view menu images"
on storage.objects
for select
to public
using (bucket_id = 'menu-images');

-- Only users whose profile role is admin can upload, replace, or delete menu images.
drop policy if exists "Admins can upload menu images" on storage.objects;
create policy "Admins can upload menu images"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'menu-images'
  and exists (
    select 1
    from public.profiles
    where profiles.id = auth.uid()
      and profiles.role = 'admin'
  )
);

drop policy if exists "Admins can update menu images" on storage.objects;
create policy "Admins can update menu images"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'menu-images'
  and exists (
    select 1
    from public.profiles
    where profiles.id = auth.uid()
      and profiles.role = 'admin'
  )
)
with check (
  bucket_id = 'menu-images'
  and exists (
    select 1
    from public.profiles
    where profiles.id = auth.uid()
      and profiles.role = 'admin'
  )
);

drop policy if exists "Admins can delete menu images" on storage.objects;
create policy "Admins can delete menu images"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'menu-images'
  and exists (
    select 1
    from public.profiles
    where profiles.id = auth.uid()
      and profiles.role = 'admin'
  )
);
