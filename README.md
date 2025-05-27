# RunFun Blog

[Astro](https://astro.build)で構築されたランニングと楽しいアクティビティに関するブログ。

## 特徴

- Markdownコンテンツ管理
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
├── docs/               # ビルド後の静的ファイル（GitHub Pages用）
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
---

ここに本文を入力...
```

3. 記事で参照する画像を `public/images/` ディレクトリに追加します

## 本番用ビルド

本番用にサイトをビルドするには：

```bash
npm run build
```

ビルドされたサイトは `docs/` ディレクトリにあり、GitHub Pagesでデプロイする準備が整っています。

## GitHub Pagesでのデプロイ

このリポジトリはGitHub Pagesでホストできるように設定されています。以下の手順でデプロイしてください：

1. リポジトリのSettings > Pagesに移動します
2. Source設定で「Deploy from a branch」を選択します
3. Branchドロップダウンから「main」ブランチと「/docs」フォルダを選択します
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

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。
