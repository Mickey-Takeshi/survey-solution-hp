-- anon ロールに contacts テーブルへの INSERT 権限を付与
grant insert on contacts to anon;

-- authenticated ロールに SELECT 権限を付与
grant select on contacts to authenticated;

-- service_role には全権限
grant all on contacts to service_role;

-- シーケンス（id の自動採番）への権限も付与
grant usage on sequence contacts_id_seq to anon;
grant usage on sequence contacts_id_seq to authenticated;
grant all on sequence contacts_id_seq to service_role;
