// まなびノート 接続設定(index.html と同じ場所に置く)
// Supabase の「Project Settings → API」から2つの値をコピーして貼り付けてください。
//   url : Project URL            例) https://abcdefghijk.supabase.co
//   key : anon public(publishable)キー  ← 公開してよいキー
// ※ service_role キーは絶対にここへ書かないでください(公開されると全データが見られてしまいます)。
window.MANABI = {
  url: "https://ここにProjectURL.supabase.co",
  key: "ここにanon(publishable)キー"
};
