-- 一旦全ポリシー削除
drop policy if exists "Allow anonymous insert" on public.contacts;
drop policy if exists "Allow authenticated select" on public.contacts;
drop policy if exists "Allow service role full access" on public.contacts;

-- RLSを一旦無効化→再有効化
alter table public.contacts disable row level security;
alter table public.contacts enable row level security;

-- ポリシー再作成（publicスキーマ明示）
create policy "anon_insert" on public.contacts
  for insert
  to anon
  with check (true);

create policy "authenticated_select" on public.contacts
  for select
  to authenticated
  using (true);

create policy "service_role_all" on public.contacts
  for all
  to service_role
  using (true)
  with check (true);

-- GRANT を明示的に再実行
grant usage on schema public to anon;
grant usage on schema public to authenticated;
grant insert on public.contacts to anon;
grant select on public.contacts to authenticated;
grant all on public.contacts to service_role;
