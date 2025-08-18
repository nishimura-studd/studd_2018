# studd. | スタッド.

個人制作 - 音とモーションタイポグラフィを組み合わせた Web サイト

## 概要

このプロジェクトは、音とタイポグラフィアニメーションを組み合わせた Web サイトです。音と同期したタイポグラフィアニメーションによる視覚的表現を体験できるほか、別モードではステップシーケンサーを用いた音楽制作も可能です。

## 主要機能

### モーションタイポグラフィ
- 音に同期したアニメーション
- 4種類のモーションパターンによる多彩な表現
- CSS3 と JavaScript によるスムーズなアニメーション制御

### ステップシーケンサー
- リアルタイムでの音楽制作・再生
- パターンの保存・読み込み機能
- Tone.js を用いた柔軟なサウンド制御

### インタラクション
- **PLAY**: 作成した音楽パターンの再生
- **CLEAR**: パターンのリセット
- **SAVE**: パターンの保存

### モード切り替え
- **通常モード**: 音とモーションタイポグラフィの鑑賞  
- **編集モード** (`?mode=edit`): ステップシーケンサー単体で音楽制作に集中  

## 技術スタック

- **フロントエンド**: HTML5, CSS3, JavaScript (ES5)
- **音響ライブラリ**: Tone.js
- **アニメーション**: CSS3 Transforms & JavaScript
- **モジュール管理**: RequireJS
- **ユーティリティ**: jQuery, Underscore.js
- **ビルドツール**: Grunt

## セットアップ

### 必要環境
- Node.js
- モダンなWebブラウザ（Chrome, Firefox, Safari推奨）

### インストール
```bash
# 依存関係のインストール（Gruntなど開発用タスクで使用）
npm install

# 開発サーバーの起動（簡易HTTPサーバー）
python3 -m http.server 8000
```

### アクセス
ブラウザで `http://localhost:8000` にアクセス

**モード切り替え:**
- 通常モード: `http://localhost:8000` - モーションタイポグラフィ
- 編集モード: `http://localhost:8000?mode=edit` - ステップシーケンサー単体で音楽制作に集中

## ファイル構成

```
src/
├── index.html              # メインHTMLファイル
├── assets/
│   ├── css/
│   │   ├── reset.css       # CSSリセット
│   │   └── style.css       # メインスタイル
│   └── js/
│       ├── index.js        # エントリーポイント
│       ├── common.js       # 共通設定
│       ├── controllers/    # ロジックやイベント制御
│       ├── views/          # UIレンダリング関連
│       └── libs/           # 外部ライブラリ
├── package.json            # Node.js依存関係
└── Gruntfile.js           # ビルド設定
```

## アーカイブ
以下から参照できます：  
[https://studd.jp/__archive/studd_2018/](https://studd.jp/__archive/studd_2018/)

## ライセンス

MIT License
（使用ライブラリもすべて MIT 互換ライセンス）