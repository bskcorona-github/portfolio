# Magic MCP Website ✨

> **Model Context Protocol (MCP)** の実装プラットフォーム - 未来的なデザインと 3D インタラクションを組み合わせた革新的なウェブサイト

## 🌟 特徴

このプロジェクトは、Magic MCP（Model Context Protocol）の公式ウェブサイトで、3 つの美しいレイヤーで構成された没入感のあるウェブ体験を提供します：

- **🔢 Matrix Code Background**: 50%透過のマトリックスレインアニメーション
- **🤖 3D Interactive Robot**: Spline で作成されたインタラクティブな 3D ロボット「Whobee」
- **⚡ Hero Odyssey Interface**: ライトニングエフェクトと洗練された UI

## 📱 ページ構成

### 主要ページ

- **🏠 ホーム**: Magic MCP プラットフォームの概要とヒーローセクション
- **⚙️ 機能**: MCP の技術仕様と主要機能の詳細
- **📊 ダッシュボード**: MCP サーバーのリアルタイム監視と管理
- **💼 ユースケース**: Magic MCP を活用した実際の統合パターンと事例
- **📞 お問い合わせ**: コンタクトフォームと連絡先情報
- **🆘 サポート**: FAQ とサポートリソース
- **📚 ドキュメント**: 技術ドキュメントと API リファレンス

## 🚀 技術スタック

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **3D Graphics**: Spline (@splinetool/react-spline)
- **Effects**: WebGL Shaders
- **Icons**: Lucide React

## 🎨 デザイン要素

### Layer Structure

```
Layer 3: Hero Odyssey (前面)
├── グローバルナビゲーション
├── ライトニングエフェクト (WebGL)
├── インタラクティブUI要素
└── カスタマイズ可能な色調整

Layer 2: 3D Robot (中間層)
├── インタラクティブ3Dロボット
├── リアルタイム操作
└── Spline統合

Layer 1: Matrix Code (背景)
├── バイナリー & 日本語文字
├── 50%透過アニメーション
└── カスタマイズ可能な速度
```

## 🛠️ セットアップ

### 前提条件

- Node.js 18+
- npm または yarn

### インストール

```bash
git clone <repository-url>
cd magic-website
npm install
```

### 環境変数の設定

お問い合わせフォームのメール送信機能を有効にするため、`.env.local` ファイルを作成してください：

```bash
# .env.local
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=your-gmail@gmail.com
MAIL_PASS=your-app-password
MAIL_FROM=your-gmail@gmail.com
```

#### Gmail 設定手順

1. **2 段階認証を有効化**

   - Google アカウント設定 > セキュリティ > 2 段階認証

2. **アプリパスワードを生成**

   - Google アカウント設定 > セキュリティ > アプリパスワード
   - 「メール」を選択してパスワードを生成

3. **環境変数を設定**
   - `MAIL_HOST`: SMTP サーバー（Gmail の場合: smtp.gmail.com）
   - `MAIL_PORT`: SMTP ポート（Gmail の場合: 587）
   - `MAIL_USER`: 送信用 Gmail アドレス
   - `MAIL_PASS`: 生成したアプリパスワード（通常のパスワードではありません）
   - `MAIL_FROM`: 送信者として表示されるメールアドレス

### 開発サーバー起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて確認してください。

## 📁 プロジェクト構造

```
magic-website/
├── src/
│   ├── app/
│   │   ├── page.tsx                # ホームページ
│   │   ├── features/               # 機能ページ
│   │   ├── dashboard/              # ダッシュボードページ
│   │   ├── use-cases/              # ユースケースページ
│   │   ├── contact/                # お問い合わせページ
│   │   ├── support/                # サポートページ
│   │   ├── docs/                   # ドキュメントページ
│   │   ├── sitemap.ts              # SEO サイトマップ
│   │   ├── layout.tsx              # グローバルレイアウト
│   │   └── globals.css             # カスタムスタイル
│   ├── components/
│   │   └── ui/
│   │       ├── navigation.tsx          # グローバルナビゲーション
│   │       ├── hero-odyssey.tsx        # Hero Odysseyコンポーネント
│   │       ├── interactive-3d-robot.tsx # 3Dロボットコンポーネント
│   │       ├── matrix-code.tsx         # Matrix Rainコンポーネント
│   │       ├── features-section.tsx    # 機能セクション
│   │       ├── about-section.tsx       # Aboutセクション
│   │       ├── cta-section.tsx         # CTAセクション
│   │       └── card.tsx                # shadcn/uiカードコンポーネント
│   └── lib/
│       └── utils.ts                # ユーティリティ関数
├── components.json                 # shadcn/ui設定
└── package.json
```

## 🎮 インタラクティブ機能

- **🎨 ライトニング色調整**: リアルタイムでライトニングエフェクトの色を変更
- **🤖 3D ロボット操作**: マウスやタッチでロボットと相互作用
- **📱 レスポンシブデザイン**: モバイル・タブレット・デスクトップ対応
- **🌈 アニメーション**: 滑らかな Framer Motion アニメーション
- **🧭 アクティブナビゲーション**: 現在のページをハイライト表示

## 🔧 Magic MCP について

**Model Context Protocol (MCP)** は Anthropic が開発したオープンスタンダードで、AI システムとデータソースを接続するためのプロトコルです。

### 主な利点

- **統一されたインターフェース**: 複数のデータソースを標準化された API で接続
- **リアルタイム統合**: AI モデルが最新のコンテキスト情報にアクセス
- **セキュアな接続**: 安全な双方向通信を実現
- **スケーラブルなアーキテクチャ**: エンタープライズレベルの統合に対応

## 📊 ダッシュボード機能

新しく追加されたダッシュボードページでは：

- **リアルタイム監視**: MCP サーバーの状態とパフォーマンス
- **サーバー管理**: 複数の MCP サーバーインスタンスの管理
- **ログ監視**: リアルタイムログストリーミング
- **クイックアクション**: サーバーの開始・停止・再起動

## 💼 ユースケース

実装済みのユースケース例：

- **企業内チャットボット**: Slack/Teams 統合
- **コード解析システム**: GitHub 連携自動レビュー
- **データ分析ダッシュボード**: BI 統合
- **ドキュメント検索**: ナレッジベース管理
- **クラウドリソース管理**: AWS/Azure/GCP 統合
- **セキュリティ監査**: 脅威検出とコンプライアンス

## 🛡️ デプロイ

### Vercel (推奨)

```bash
npm install -g vercel
vercel
```

### その他のプラットフォーム

- Netlify
- AWS Amplify
- GitHub Pages

## 🔍 SEO 最適化

- ✅ 構造化データ (JSON-LD)
- ✅ Open Graph メタタグ
- ✅ Twitter Card 対応
- ✅ サイトマップ自動生成
- ✅ 適切な meta タグ設定

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

このプロジェクトは MIT ライセンスの下で公開されています。詳細は [LICENSE](LICENSE) ファイルを参照してください。

## 🙏 謝辞

- **Anthropic**: Model Context Protocol の開発
- **Spline**: 素晴らしい 3D デザインツール
- **21st.dev**: Hero Odyssey と Matrix Code コンポーネント
- **shadcn/ui**: 美しい UI コンポーネントライブラリ
- **Vercel**: Next.js の開発チーム

---

✨ **Magic MCP** - AI と未来をつなぐテクノロジープラットフォーム ✨
