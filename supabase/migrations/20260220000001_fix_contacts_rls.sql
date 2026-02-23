-- 既存のポリシーを削除して再作成
drop policy if exists "Allow anonymous insert" on contacts;
drop policy if exists "Allow authenticated select" on contacts;

-- anon ユーザーに INSERT を許可（フォーム送信用）
create policy "Allow anonymous insert" on contacts
  for insert
  to anon
  with check (true);

-- anon ロールでも service_role でもSELECT可能（管理用）
create policy "Allow authenticated select" on contacts
  for select
  to authenticated
  using (true);

-- service_role は全操作可能（管理画面用）
create policy "Allow service role full access" on contacts
  for all
  to service_role
  using (true)
  with check (true);
