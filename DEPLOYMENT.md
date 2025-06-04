# 🚀 GitHub リポジトリ作成 & デプロイガイド

## 📋 GitHub リポジトリ作成手順

### 1. GitHub でリポジトリを作成

1. **GitHub**にアクセス: [https://github.com](https://github.com)
2. **New repository**をクリック
3. **Repository settings:**
   - Repository name: `magic-website`
   - Description: `未来的なデザインと3Dインタラクションを組み合わせた革新的なウェブサイト`
   - Visibility: **Public** (または Private)
   - **Create repository**をクリック

### 2. ローカルリポジトリと GitHub を接続

```bash
# GitHubリポジトリのURLを追加（YOUR_USERNAMEを実際のユーザー名に変更）
git remote add origin https://github.com/YOUR_USERNAME/magic-website.git

# メインブランチの名前を変更（必要に応じて）
git branch -M main

# GitHubにプッシュ
git push -u origin main
```

### 3. GitHub ページの設定

```bash
# GitHub Pagesブランチを作成（オプション）
git checkout -b gh-pages
git push -u origin gh-pages
git checkout main
```

## 🌍 Vercel デプロイ

### 自動デプロイ設定

1. **Vercel**にアクセス: [https://vercel.com](https://vercel.com)
2. **Import Git Repository**
3. **GitHub アカウント**を接続
4. **magic-website**リポジトリを選択
5. **Deploy**をクリック

### 環境変数設定（必要に応じて）

Vercel ダッシュボードで以下を設定：

```env
NEXT_PUBLIC_SITE_URL=https://your-app.vercel.app
```

## 🛠️ MCP サーバー機能

このプロジェクトは以下の方法で MCP サーバーとして機能します：

### API Routes（API ルート）

```typescript
// src/app/api/components/route.ts
export async function GET() {
  return Response.json({
    components: [
      { name: "MatrixCode", type: "3d-background" },
      { name: "InteractiveRobot", type: "3d-interactive" },
      { name: "HeroOdyssey", type: "ui-overlay" },
    ],
  });
}
```

### Webhooks 設定

```bash
# GitHub Webhooksを設定して自動デプロイ
curl -X POST https://api.github.com/repos/YOUR_USERNAME/magic-website/hooks
```

## 📊 パフォーマンス最適化

### ビルド最適化

```bash
# プロダクションビルド
npm run build

# パフォーマンステスト
npm run type-check
npm run lint
```

### CDN 設定

Vercel での自動 CDN 設定：

- **Static Assets**: 自動キャッシュ
- **3D Models**: Spline キャッシュ
- **WebGL Shaders**: ブラウザキャッシュ

## 🔐 セキュリティ設定

### 環境変数

```env
# .env.local
NEXT_PUBLIC_SPLINE_API_KEY=your_spline_key
GITHUB_TOKEN=your_github_token
```

### CORS 設定

```typescript
// next.config.js
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE" },
        ],
      },
    ];
  },
};
```

## 🤖 GitHub Actions CI/CD

`.github/workflows/deploy.yml`:

```yaml
name: Deploy Magic Website

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "18"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📈 監視とアナリティクス

### Vercel Analytics

```typescript
// src/app/layout.tsx
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🎯 本番運用チェックリスト

- [ ] GitHub リポジトリ作成完了
- [ ] Vercel デプロイ設定完了
- [ ] カスタムドメイン設定（オプション）
- [ ] SSL 証明書自動更新確認
- [ ] パフォーマンス監視設定
- [ ] エラー追跡設定
- [ ] GitHub Actions CI/CD 設定
- [ ] セキュリティヘッダー設定
- [ ] 環境変数セキュア化

---

🚀 **準備完了！** Magic Website がプロダクション環境で稼働します！
