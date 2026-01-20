# RunFun Blog

[Astro](https://astro.build)で構築されたランニングと楽しいアクティビティに関するブログ。

## 特徴

- Markdownコンテンツ管理
- カテゴリー分類機能
- レスポンシブデザイン
- 高速な静的サイト生成
- シンプルで清潔なユーザーインターフェース

## はじめに

### 前提条件

- [Node.js](https://nodejs.org/)（v16以上）
- npmまたはyarn

### インストール

1. リポジトリをクローンします：
```bash
git clone https://github.com/Shun-Kohatsu582/runfun-blog-copilot.git
cd runfun-blog-copilot
```

2. 依存関係をインストールします：
```bash
npm install
```

3. 開発サーバーを起動します：
```bash
npm run dev
```

4. ブラウザを開いて `http://localhost:4321` にアクセスします

## プロジェクト構造

```
/
├── public/             # 静的アセット
│   ├── images/         # ブログ記事の画像
│   └── favicon.svg     # サイトのファビコン
├── src/
│   ├── components/     # 再利用可能なUIコンポーネント
│   ├── layouts/        # ページレイアウト
│   └── pages/          # サイトページとブログ記事
│       ├── blog/       # ブログ記事（Markdownファイル）
│       ├── about.astro # アバウトページ
│       └── index.astro # ホームページ
├── dist/               # ビルド後の静的ファイル
└── astro.config.mjs    # Astroの設定
```

## ブログ記事の追加

1. `src/pages/blog/` ディレクトリに新しいMarkdownファイルを作成します
2. ファイルの先頭に以下のフロントマターを追加します：

```md
---
layout: ../../layouts/BlogPostLayout.astro
title: '記事のタイトル'
description: '記事の簡単な説明'
pubDate: 'YYYY-MM-DD'
heroImage: '/images/your-image.jpg' # オプション
categories: ['カテゴリー1', 'カテゴリー2'] # オプション
---

ここに本文を入力...
```

3. 記事で参照する画像を `public/images/` ディレクトリに追加します

## 本番用ビルド

本番用にサイトをビルドするには：

```bash
npm run build
```

ビルドされたサイトは `dist/` ディレクトリにあります。

## GitHub Pagesでのデプロイ

このリポジトリはGitHub Pagesでホストできるように設定されています。以下の手順でデプロイしてください：

1. リポジトリのSettings > Pagesに移動します
2. Source設定で「Deploy from a branch」を選択します
3. Branchドロップダウンから「main」ブランチと「/dist」フォルダを選択します
4. 「Save」ボタンをクリックします

デプロイが完了すると、サイトは以下のURLで公開されます：
https://shun-kohatsu582.github.io/runfun-blog-copilot/

### カスタムドメインの設定（オプション）

カスタムドメインを使用する場合は、以下の手順で設定します：

1. リポジトリのSettings > Pagesに移動します
2. 「Custom domain」欄に使用するドメインを入力します（例：www.runfunblog.com）
3. 「Save」ボタンをクリックします
4. DNSプロバイダー側で必要なDNS設定を行います
   - Apexドメイン（example.com）の場合：GitHubが提供するIPアドレスにAレコードを設定
   - サブドメイン（www.example.com）の場合：`username.github.io`へのCNAMEレコードを設定

詳細は[GitHub Pagesのドキュメント](https://docs.github.com/ja/pages/configuring-a-custom-domain-for-your-github-pages-site)を参照してください。

## Cloudflare Pagesでのデプロイ

このリポジトリはCloudflare Pagesでも自動デプロイできるように設定されています。以下の手順でセットアップしてください：

### Cloudflare Pagesプロジェクトの作成

1. [Cloudflare Dashboard](https://dash.cloudflare.com/)にログインします
2. 左側のサイドバーから「Pages」を選択します
3. 「Create a project」ボタンをクリックします
4. 「Connect to Git」を選択します
5. GitHubのアカウントを接続し、このリポジトリを選択します
6. 以下のビルド設定を構成します：
   - **Project name**: 任意のプロジェクト名（例：runfun-blog）
   - **Production branch**: `main`（または希望するブランチ）
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`（デフォルト）
7. 「Save and Deploy」ボタンをクリックします

### 環境変数の設定（オプション）

プロジェクトのビルド設定に特定の環境変数を追加することができます：

1. Cloudflareダッシュボードで作成したPagesプロジェクトを選択します
2. 「Settings」タブ、次に「Environment variables」を選択します
3. 必要に応じて以下の環境変数を追加します：
   - `NODE_VERSION`: `16`（または適切なNode.jsバージョン）
   - `NPM_VERSION`: `8`（または適切なNPMバージョン）

### デプロイトリガー

以下のアクションでCloudflare Pagesへの自動デプロイがトリガーされます：

- **本番環境**: 設定した本番ブランチ（通常は`main`）へのプッシュまたはマージ
- **プレビュー環境**: 他のブランチへのプッシュ（プルリクエストごとにユニークなプレビューURLが生成されます）

### カスタムドメインの設定

Cloudflare Pagesでカスタムドメインを設定するには：

1. Cloudflareダッシュボードで作成したPagesプロジェクトを選択します
2. 「Custom domains」タブをクリックします
3. 「Set up a custom domain」ボタンをクリックします
4. 使用するドメインを入力し、指示に従って設定を完了します
   - Cloudflareでホストしているドメインを使用する場合は、自動で設定されます
   - 外部のDNSプロバイダーを使用している場合は、必要なDNSレコードを手動で設定する必要があります

### 手動デプロイ（Wrangler CLI）

GitHub連携ではなく、Wrangler CLIを使って手動でデプロイする場合：

1. **認証の設定**:
   ```bash
   # ブラウザベースの認証（推奨）
   npx wrangler login
   
   # または、APIトークンを使用する場合
   # CloudflareダッシュボードでAPIトークンを作成し、以下の権限を付与：
   # - Account: Cloudflare Pages:Edit
   # その後、環境変数に設定：
   export CLOUDFLARE_API_TOKEN="your-api-token"
   ```

2. **デプロイの実行**:
   ```bash
   npm run deploy
   # または
   pnpm run deploy
   ```

### トラブルシューティング

デプロイに問題がある場合は、以下を確認してください：

1. **認証エラー**: 
   - APIトークンを使用している場合、`CLOUDFLARE_API_TOKEN`環境変数を削除して`npx wrangler login`を実行してください
   - APIトークンに「Cloudflare Pages:Edit」権限があることを確認してください
2. **ビルドエラー**: Cloudflare Pagesの「Deployments」タブでデプロイのビルドログを確認します
3. **パス設定**: 404エラーが発生する場合は、`astro.config.mjs`の`base`パスが正しく設定されているか確認します（現在は全ての環境で `/` に設定されています）
4. **キャッシュの問題**: 変更が反映されない場合は、Cloudflareのキャッシュをパージするか、ハード更新（Ctrl+F5）を試してください
5. **依存関係**: `package.json`に必要な依存関係がすべて含まれているか確認します

詳細は[Cloudflare Pagesのドキュメント](https://developers.cloudflare.com/pages/)を参照してください。

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
