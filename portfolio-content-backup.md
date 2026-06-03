# ポートフォリオコンテンツバックアップ

作成日: 2024 年 12 月 19 日 / 最終更新: 2026 年 6 月 3 日

このファイルは現在のポートフォリオサイトの重要なコンテンツ（職務経歴、プロジェクト、スキル）のバックアップです。

## 1. 職務経歴（Experience）

### 職歴データ

#### B2B SaaS 企業（現場業務支援 / 清掃・ビルメンテナンス領域）

- **期間**: 2025 年 10 月 ～ 現在
- **プロジェクト**: 現場業務支援 SaaS の開発・運用（プロジェクトリード兼フルスタック）
- **概要**: 現場業務の受発注・業務管理を扱う B2B SaaS の開発・運用に従事。企画〜要件整理〜進行管理のプロジェクトリードと、フロント／バックエンドの実装を兼務。複数プロジェクトを並行リードし、KPI・工数削減で効果を定義しながら他部署横断の合意形成も担当。
- **役割**: プロジェクトリード兼フルスタックエンジニア
- **使用技術**: Next.js 15, React 18, TypeScript, Jotai, SWR, Radix UI, Tailwind CSS, PHP 8.2, Laravel 11, Livewire 3, Vitest, Playwright, Serverless Framework
- **主な担当業務**:
  - 新旧 2 系統の業務報告画面を統一する完全移行プロジェクトをリード（二重運用による保守コスト・サポート負担を解消）
  - 業務報告帳票（Excel／PDF）の自動改行・レイアウト品質を改善し、日本語として自然な折り返しロジックに刷新＋見切れ防止の回帰テストを整備
  - 問い合わせ導線をメッセージング経由から構造化フォームへ移行（他部署の対応工数を月約 60 時間削減見込み）
  - 外部メッセージングプラットフォームの OAuth セルフ連携をフロント／バック両面で設計・実装（社内対応工数を月約 15 時間削減見込み）
  - AI／ノーコードを活用した見積もり機能のプロトタイピングをリード
  - ユーザー報告不具合の一次対応〜原因調査〜恒久対応〜回帰テスト追加までを一貫して運用
  - レイヤ分離（Controller / FormRequest / Service / UseCase・DTO）を意識した設計規約の整備

#### 株式会社りゅう

- **期間**: 2024 年 11 月 ～ 2025 年 09 月
- **プロジェクト**: 学習管理システム EC サイト改修・診断テスト機能追加
- **概要**: オンライン学習システムの EC サイトに実力診断テスト販売機能を新規追加。6 種類の購入パターンに対応した EC サイト全体の大規模改修プロジェクト
- **役割**: 開発メンバー (1 名)
- **使用技術**: PHP (Laravel), MySQL, Docker, Git(Lab), Slack
- **主な担当業務**:
  - EC サイト購入フロー改修（6 種類の購入パターン対応）
  - API 改修・新規開発（購入データ送信・受信処理）
  - 販売期間設定機能の新規開発（管理画面）
  - 各種メール・画面の文言・UI 改修
  - 受注管理機能の拡張（診断テスト対応）
  - Web 試験問題差し替えシステムの開発・実装
  - テーブル新規追加・既存データ整合性チェック
  - 単体テスト設計・実施

#### ブロードバンドテクノロジー・コンサルティング株式会社

- **期間**: 2024 年 05 月 ～ 2024 年 08 月
- **プロジェクト**: 銀行の Web アプリケーションフロントエンド開発チーム
- **概要**: 銀行 Web アプリフロントエンド開発チームに参画。障害対応・実装修正と点検要因として従事。
- **役割**: メンバー (チーム 7 名 / プロジェクト全体約 100 名)
- **使用技術**: React, TypeScript, AWS CodeCommit, VScode, Gitlab
- **主な担当業務**:
  - 実装修正
  - 障害対応 (1 日 1 ～ 2 件)
  - 各種点検 (画面、ボタン、文言、デザインガイド、設計書、URL 遷移先、レスポンシブ、英語版表記)
  - エビデンス作成

#### T&C テクノロジーズ株式会社

- **期間**: 2023 年 04 月 ～ 2024 年 04 月
- **プロジェクト**: 新 CPaaS 開発 / 通信企業顧客管理システム
- **概要**: 新 CPaaS システムの管理コンソール画面作成（主にユーザー管理画面のバックエンド担当）
- **役割**: メンバー (チーム 6 名 / プロジェクト全体約 60 名)
- **使用技術**: Go (Echo), PostgreSQL, VScode, Docker, Backlog, Github, Slack, AWS
- **主な担当業務**:
  - 英語ドキュメント読解
  - 仕様書レビュー参加
  - ユースケース文書作成
  - 詳細設計書作成
  - OpenAPI 定義作成（フロント側含む 40 個程）
  - API 開発
  - 自動テストコード作成
  - リファクタリング

## 2. プロジェクト（Projects）

### Web アプリケーション・ランディングページ

#### LoL Team Balancer

- **概要**: League of Legends のカスタムゲーム（内部スクリム）向けチーム分けツール。10 人を 126 通り全探索し、最もバランスの取れた 5v5 へ自動編成。Riot ランクに依存しない独自 ELO レーティング、メイン/サブ/可/不可の 5×4 ロール評価マトリクス、シーズン制ランキング・MVP 記録、Discord 連携に対応。登録不要・招待リンク制で、現在 800 人のユーザーに利用されています。
- **言語**: Next.js
- **カテゴリ**: Web アプリケーション
- **URL**: https://lol-team-balancer-delta.vercel.app/
- **技術**: Next.js, TypeScript, Tailwind CSS, ELO Rating, Discord, Vercel

#### カネマサ建物 - 沖縄の別荘・不動産管理

- **概要**: 沖縄で別荘・賃貸物件の管理を行う不動産管理会社のランディングページ。約 40 年・500 件以上の実績、宅地建物取引士による直接相談、月額 11,000 円〜の管理プランなどを訴求。信頼感を重視した構成とレスポンシブ対応で、問い合わせ導線まで設計。
- **言語**: Next.js
- **カテゴリ**: ランディングページ
- **URL**: https://kanemasa-tatemono-lp.vercel.app/
- **技術**: Next.js, TypeScript, Tailwind CSS, Vercel

#### ポケモン図鑑

- **概要**: ポケモンのデータベースを提供するウェブアプリケーション。各ポケモンの詳細情報、タイプ、能力値などを検索・閲覧できます。
- **言語**: JavaScript
- **カテゴリ**: Web アプリケーション
- **URL**: https://my-pokedex-Full Stack.vercel.app/
- **技術**: JavaScript, HTML, CSS, API

#### Magic MCP

- **概要**: MagicMCPServer を活用したかっこいいヒーローセクション。3D ロボット、WebGL ライトニング、マトリックスコードが融合したインタラクティブな次世代 Web エクスペリエンスを提供します。
- **言語**: React
- **カテゴリ**: インタラクティブサイト
- **URL**: https://magic-website-sigma.vercel.app/
- **技術**: React, Tailwind CSS, Framer Motion, WebGL

#### アクアマリン沖縄

- **概要**: 沖縄のマリンアクティビティを提供する会社のランディングページ。フライボード、パラセーリング、バナナボートなどのアクティビティ予約サービスを紹介しています。
- **言語**: HTML/CSS
- **カテゴリ**: ランディングページ
- **URL**: https://sample-lp4.vercel.app/
- **技術**: HTML, CSS, JavaScript

#### BeautySalon

- **概要**: 美容サロンのランディングページ。サービス一覧、よくある質問、予約機能などを備えたレスポンシブなデザインです。心地よい空間と最高品質のトリートメントを提供する美容サロンのブランディングを表現しています。
- **言語**: HTML/CSS
- **カテゴリ**: ランディングページ
- **URL**: https://sample-lp10.vercel.app/
- **技術**: HTML, CSS, JavaScript, Responsive

#### 農力アップ 産業振興株式会社

- **概要**: 農業用肥料の製造・販売企業のランディングページ。製品情報、効果・メリット、導入事例、技術的特長などを詳細に紹介。ユーザーフレンドリーな UI 設計で、農家の課題解決を重視したコンテンツ構成となっています。
- **言語**: HTML/CSS
- **カテゴリ**: ランディングページ
- **URL**: https://sangyousinkoulp.vercel.app/
- **技術**: HTML, CSS, JavaScript, Responsive

### GitHub プロジェクト

#### elorating-Full Stack

- **概要**: elorating5vs5 フロントエンド側 - ゲームレーティングシステムの Web アプリケーション
- **言語**: JavaScript
- **URL**: https://github.com/bskcorona-github/elorating-Full Stack
- **技術**: JavaScript, HTML, CSS
- **統計**: Stars: 0, Commits: 25

#### elorating-backend

- **概要**: elorating5vs5 のバックエンド API - Go 言語で構築されたレーティングシステム
- **言語**: Go
- **URL**: https://github.com/bskcorona-github/elorating-backend
- **技術**: Go, REST API
- **統計**: Stars: 0, Commits: 42

#### Bread_Cli

- **概要**: コマンドライン環境での効率的な作業を支援する CLI ツール
- **言語**: Go
- **URL**: https://github.com/bskcorona-github/Bread_Cli
- **技術**: Go, CLI
- **統計**: Stars: 0, Commits: 15

#### pan

- **概要**: Go 言語で開発された軽量な Web アプリケーション
- **言語**: Go
- **URL**: https://github.com/bskcorona-github/pan
- **技術**: Go, Web
- **統計**: Stars: 0, Commits: 8

#### 1_todoList

- **概要**: Go 言語で実装されたシンプルな Todo リスト管理アプリケーション
- **言語**: Go
- **URL**: https://github.com/bskcorona-github/1_todoList
- **技術**: Go, Todo App
- **統計**: Stars: 0, Commits: 12

#### 2_calculator

- **概要**: Go 言語で開発された計算機アプリケーション
- **言語**: Go
- **URL**: https://github.com/bskcorona-github/2_calculator
- **技術**: Go, Calculator
- **統計**: Stars: 0, Commits: 7

### GitHub プロフィール

- **URL**: https://github.com/bskcorona-github

## 3. スキル・技術スタック（Skills & Tools）

### プログラミング言語使用統計

- **TypeScript**: 55.24%
- **JavaScript**: 23.79%
- **Python**: 8.23%
- **HTML**: 5.01%
- **CSS**: 3.98%
- **Vue**: 3.76%

### 技術スタック詳細

#### Languages & Frameworks

- TypeScript
- JavaScript
- Python
- React
- Next.js
- Vue.js
- Nuxt.js
- Go
- PHP
- Laravel
- Express.js
- Material UI
- VBA

#### Databases & Database Tools

- MySQL
- PostgreSQL
- MongoDB
- PL/SQL
- DBeaver
- HeidiSQL
- SQLdeveloper
- pgmodeler

#### Cloud Services

- AWS
- AWS Lambda
- AWS RDS
- CloudFormation
- AWS Cognito
- CodePipeline
- CodeCommit
- Vercel

#### Development Tools

- Visual Studio Code
- Cursor
- Docker
- Postman
- Ubuntu

#### Version Control

- Git
- GitHub
- GitLab
- TortoiseSVN

#### CI/CD

- Jenkins
- SonarQube

#### Project Management

- Redmine
- Slack
- Notion
- Backlog

#### AI & Design Tools

- Claude
- MCP Server
- Figma

#### Other Tools

- Tailwind CSS
- Prisma
- Discord

## バックアップ対象ファイル

このバックアップは以下のファイルから作成されました：

1. `components/ExperienceSection.tsx` - 職務経歴データ
2. `components/ProjectsSection.tsx` - プロジェクトデータ
3. `components/TechStackSection.tsx` - スキル・技術スタックデータ
4. `app/sections/experience/page.tsx` - 職務経歴ページ
5. `app/sections/projects/page.tsx` - プロジェクトページ
6. `app/sections/skills/page.tsx` - スキルページ

これらのコンテンツは新しい magic-website ベースのポートフォリオサイトに移植できるよう整理されています。
