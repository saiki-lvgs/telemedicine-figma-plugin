# Telemedicine Figma Plugin Collection

オンライン診療アプリ「レバクリ」用のFigmaプラグインコレクションです。

## 📦 **含まれるプラグイン**

### **Variables Downloader** (`variables-downloader/`)
Figmaドキュメント内の変数（Variables）をJSON形式でダウンロードできるプラグイン

**主要機能:**
- 自動変数スキャン
- コレクション別フィルタリング
- Raw/マッピングデータ形式選択
- プレビュー機能
- ワンクリックコピー

**詳細**: [variables-downloader/README.md](variables-downloader/README.md)

## 🚀 **クイックスタート**

### **セットアップ**
```bash
# リポジトリをクローン
git clone https://github.com/lvgs-tmd/telemedicine-figma-plugin.git
cd telemedicine-figma-plugin

# プラグインのビルド
cd variables-downloader
npm install
npm run build
```

### **Figmaプラグインへの追加**
1. Figma Desktop Appを開く
2. 「Plugins」→「Development」→「New Plugin...」
3. 「Import plugin from manifest...」をクリック
4. `variables-downloader/manifest.json`ファイルを選択

## 🏗️ **プロジェクト構成**

```
telemedicine-figma-plugin/
├── README.md                    # このファイル
└── variables-downloader/        # 変数ダウンロードプラグイン
    ├── README.md               # 詳細なドキュメント
    ├── manifest.json           # プラグイン設定
    ├── code.ts                 # メインロジック
    ├── ui.html                 # UI
    └── package.json            # 依存関係
```

## 🎯 **用途**

### **Variables Downloader**
- デザインシステムの変数を開発環境に移行
- SCSS変数への変換
- デザインとコードの同期

詳細な使用方法や開発情報は [variables-downloader/README.md](variables-downloader/README.md) を参照してください。
