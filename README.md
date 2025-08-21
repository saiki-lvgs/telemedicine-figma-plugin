# Telemedicine Figma Plugin Collection

オンライン診療アプリ「Levcli」用のFigmaプラグインコレクションです。

## 📦 **含まれるプラグイン**

### **1. Variables Downloader** (`variables-downloader/`)
Figmaドキュメント内の変数（Variables）をJSON形式でダウンロードできるプラグイン

**主要機能:**
- 自動変数スキャン
- コレクション別フィルタリング
- Raw/マッピングデータ形式選択
- プレビュー機能
- ワンクリックコピー

**詳細**: [variables-downloader/README.md](variables-downloader/README.md)

### **2. Get Variables ID** (`get-variables-id/`)
Figma変数のIDを取得するシンプルなプラグイン

## 🚀 **クイックスタート**

### **前提条件**
- Figma Desktop App
- Node.js 16.0以上

### **セットアップ**
```bash
# リポジトリをクローン
git clone <repository-url>
cd telemedicine-figma-plugin

# 各プラグインのディレクトリで依存関係をインストール
cd variables-downloader
npm install
npm run build

cd ../get-variables-id
npm install
npm run build
```

### **Figmaプラグインへの追加**
1. Figma Desktop Appを開く
2. 「Plugins」→「Development」→「New Plugin...」
3. 「Import plugin from manifest...」をクリック
4. 各プラグインの`manifest.json`ファイルを選択

## 🏗️ **プロジェクト構成**

```
telemedicine-figma-plugin/
├── README.md                    # このファイル
├── variables-downloader/        # 変数ダウンロードプラグイン
│   ├── README.md               # 詳細なドキュメント
│   ├── manifest.json           # プラグイン設定
│   ├── code.ts                 # メインロジック
│   ├── ui.html                 # UI
│   └── package.json            # 依存関係
└── get-variables-id/           # 変数ID取得プラグイン
    ├── manifest.json           # プラグイン設定
    ├── code.ts                 # メインロジック
    └── package.json            # 依存関係
```

## 🎯 **用途**

### **Variables Downloader**
- デザインシステムの変数を開発環境に移行
- SCSS変数への変換
- デザインとコードの同期

### **Get Variables ID**
- 変数IDの確認
- 開発時の参照

## 🔧 **開発**

### **ビルド**
```bash
# 全プラグインをビルド
find . -name "package.json" -execdir npm run build \;
```

### **テスト**
各プラグインのディレクトリで個別にテストを実行してください。

## 📄 **ライセンス**

社内利用を目的としています。

## 📞 **サポート**

開発チームまでお問い合わせください。

---

**最終更新**: 2024年12月  
**バージョン**: 1.0.0
