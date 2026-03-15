# AIエージェント設定代行

OpenClaw・Claude・Claude Code の導入支援サービスのランディングページ

## 技術スタック

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Resend (メール送信)

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local` ファイルを作成:

```bash
cp .env.example .env.local
```

以下の環境変数を設定:

```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=tomoaki.nishimura@funtoco.jp
```

### 3. Resend API キーの取得

1. https://resend.com にアクセス
2. アカウント登録（無料枠: 月100通）
3. API Keys セクションで新しいキーを作成
4. `.env.local` に貼り付け

### 4. 開発サーバー起動

```bash
npm run dev
```

http://localhost:3000 でアクセス

## デプロイ (Vercel)

1. https://vercel.com にアクセス
2. GitHub でログイン
3. `tomoakinishimura/ai-agent-setup` をインポート
4. 環境変数を設定:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL`
5. デプロイ

## 機能

- ✅ レスポンシブデザイン
- ✅ SEO最適化
- ✅ お問い合わせフォーム
- ✅ メール送信機能（Resend）

## SEOキーワード

- AIエージェント設定代行
- OpenClaw 導入支援
- Claude 導入
- Claude Code 設定
- AI秘書 設定サポート
