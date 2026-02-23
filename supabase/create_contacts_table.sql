-- contacts テーブル作成
-- Supabase Dashboard > SQL Editor で実行してください

create table if not exists contacts (
  id bigint generated always as identity primary key,
  name text not null,
  company text,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz default now()
);

-- RLS（Row Level Security）を有効化
alter table contacts enable row level security;

-- anon ユーザーに INSERT のみ許可（フォーム送信用）
create policy "Allow anonymous insert" on contacts
  for insert
  to anon
  with check (true);

-- authenticated ユーザーに SELECT を許可（管理画面での閲覧用）
create policy "Allow authenticated select" on contacts
  for select
  to authenticated
  using (true);
