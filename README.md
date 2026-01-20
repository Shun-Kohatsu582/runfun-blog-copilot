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
h heroImage: '/images/your-image.jpg' # オプション
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

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。