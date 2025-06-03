# Modern Portfolio Website - Hero Odyssey Edition

> **Next.js + TypeScript + Tailwind CSS + WebGL で構築された次世代ポートフォリオサイト**

## 🌟 新機能 - Hero Odyssey Integration

- **WebGL ライトニングエフェクト**: リアルタイムで動作するシェーダーベースのライトニングアニメーション
- **インタラクティブ Hue コントロール**: スライダーでライトニングの色を動的に変更
- **ページ分割システム**: セクション毎に独立したページとユニークな WebGL エフェクト
- **21st.dev 風モダン UI**: 最新のデザイントレンドを採用

## 🎨 デザイン特徴

### Hero Odyssey ベースの要素

- **WebGL シェーダー**: カスタマイズ可能なライトニングエフェクト
- **グラスモーフィズム**: 透明度とブラー効果を活用した UI
- **フローティング要素**: 技術スタックを示すアニメーション付きカード
- **レスポンシブナビゲーション**: モバイルメニュー対応

### ページ別テーマカラー

- **Home**: ブルー・パープルグラデーション (Hue: 220)
- **Experience**: パープル・ブルーグラデーション (Hue: 280)
- **Projects**: グリーン・シアングラデーション (Hue: 150)
- **Skills**: オレンジ・レッドグラデーション (Hue: 30)

## 🚀 技術スタック

### フロントエンド

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (アニメーション)

### WebGL & シェーダー

- **WebGL Context** (フラグメントシェーダー)
- **GLSL** (OpenGL Shading Language)
- **リアルタイムレンダリング**

### UI コンポーネント

- **shadcn/ui 互換**
- **lucide-react** (アイコン)
- **Class Variance Authority** (スタイリング)

## 📂 プロジェクト構造

```
portfolio/
├── app/
│   ├── page.tsx                 # メインページ (Hero Odyssey)
│   ├── layout.tsx              # 全体レイアウト
│   ├── globals.css             # グローバルスタイル
│   └── sections/               # 分割ページ
│       ├── experience/
│       │   └── page.tsx        # 経験セクション
│       ├── projects/
│       │   └── page.tsx        # プロジェクトセクション
│       └── skills/
│           └── page.tsx        # スキルセクション
├── components/
│   ├── ui/
│   │   └── hero-odyssey.tsx    # メインHeroコンポーネント + WebGL
│   ├── HeroSection.tsx         # 旧ヒーローセクション
│   ├── TechStackSection.tsx    # 技術スタック表示
│   ├── ExperienceSection.tsx   # 職歴表示
│   └── ProjectsSection.tsx     # プロジェクト表示
└── lib/
    └── utils.ts                # shadcn/ui ユーティリティ
```

## 🛠 開発・実行方法

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動 (通常は localhost:3000, ポート使用中は 3001)
npm run dev

# 本番ビルド
npm run build

# 本番サーバーの起動
npm start
```

## 🎮 インタラクティブ機能

### Hue スライダー

- **リアルタイム制御**: 0-360 度の色相調整
- **スプリングアニメーション**: なめらかなフィードバック
- **WebGL 統合**: シェーダーに直接反映

### ナビゲーション

- **シームレス遷移**: ページ間の滑らかな移動
- **モバイル対応**: ハンバーガーメニュー
- **アニメーション**: Framer Motion によるトランジション

## 🔧 WebGL シェーダー詳細

### フラグメントシェーダー機能

- **ノイズ生成**: ペーリンノイズベースのテクスチャ
- **色相変換**: HSV→RGB 変換アルゴリズム
- **リアルタイム計算**: 60FPS での動的レンダリング

### カスタマイズ可能パラメータ

```typescript
interface LightningProps {
  hue?: number; // 色相 (0-360)
  xOffset?: number; // 水平オフセット
  speed?: number; // アニメーション速度
  intensity?: number; // 明度
  size?: number; // サイズ倍率
}
```

## 📱 レスポンシブ対応

- **デスクトップ**: フル WebGL エフェクト + インタラクティブ要素
- **タブレット**: 最適化されたレイアウト
- **モバイル**: 軽量化エフェクト + タッチ対応

## 🎯 ページ別機能

### / (ホーム)

- Hero Odyssey メインデザイン
- インタラクティブ Hue スライダー
- 技術スタック表示
- ナビゲーションハブ

### /sections/experience

- 職歴タイムライン
- パープル系 Lightning エフェクト
- プロジェクト詳細

### /sections/projects

- GitHub 統合プロジェクト表示
- グリーン系 Lightning エフェクト
- カテゴリフィルター

### /sections/skills

- 技術スタック可視化
- オレンジ系 Lightning エフェクト
- プログレスバー

## 🚀 デプロイ

```bash
# Vercelでのデプロイ
npx vercel

# Netlifyでのデプロイ
npm run build && npx netlify deploy --prod --dir=.next
```

## 📊 パフォーマンス

- **WebGL 最適化**: 効率的なシェーダープログラム
- **コード分割**: Next.js App Router の活用
- **画像最適化**: Next.js Image コンポーネント

## 🎨 カスタマイズ

### シェーダーパラメータ調整

```typescript
<Lightning
  hue={180} // シアン
  xOffset={0.2} // 右寄り
  speed={2.0} // 2倍速
  intensity={0.8} // 高輝度
  size={1.5} // 1.5倍サイズ
/>
```

### テーマカラー変更

`tailwind.config.js`でカスタムカラーパレットを定義

---

**作成者**: Bsk Corona  
**GitHub**: [@bskcorona-github](https://github.com/bskcorona-github)  
**技術**: Modern Full Stack Engineering with WebGL & Shaders  
**インスピレーション**: [21st.dev Hero Odyssey](https://21st.dev/erikvalencia1/hero-odyssey/default)
