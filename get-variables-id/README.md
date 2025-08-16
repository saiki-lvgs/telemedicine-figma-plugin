# Figma Variables ID Getter

このFigmaプラグインは、Figmaファイル内で定義されているVariablesのIDと詳細情報を取得して、コンソールにJSON形式で出力するツールです。Design Systemの移行やVariablesを外部で利用する際に便利です。

## 🎯 機能

- Figmaファイル内の全てのローカルVariablesを取得
- 各VariableのID、名前、値、タイプ、コレクションIDを出力
- コンソールに見やすいJSON形式で出力
- 実行結果をファイルとして保存可能

## 📋 出力される情報

プラグインを実行すると、以下の形式でVariables情報が出力されます：

```json
{
  "variable-id-1": {
    "name": "Primary/Blue/500",
    "value": "#3B82F6",
    "type": "COLOR",
    "collection": "collection-id-1"
  },
  "variable-id-2": {
    "name": "Spacing/Medium",
    "value": 16,
    "type": "FLOAT",
    "collection": "collection-id-2"
  }
}
```

## 🚀 セットアップ手順

### 1. 必要な環境のインストール

Node.js（NPMを含む）をインストールしてください：
- [Node.js ダウンロードページ](https://nodejs.org/en/download/)

### 2. TypeScriptのインストール

```bash
npm install -g typescript
```

### 3. 依存関係のインストール

プラグインディレクトリで以下を実行：

```bash
npm install --save-dev @figma/plugin-typings
npm install
```

### 4. プラグインのビルド

TypeScriptコードをJavaScriptにコンパイル：

```bash
npm run build
```

開発中は以下でファイル変更を監視：

```bash
npm run watch
```

## 📦 Figmaへのプラグイン追加

### 開発版として追加する場合

1. Figmaを開く
2. メニューから `Plugins` → `Development` → `Import plugin from manifest...` を選択
3. このプロジェクトの `manifest.json` ファイルを選択

### プラグインとして公開する場合

1. [Figma Plugin Publishing Guide](https://www.figma.com/plugin-docs/publishing-plugins/) を参照
2. プラグインをFigma Community に公開

## 💻 使い方

1. Variables を設定したFigmaファイルを開く
2. プラグインメニューから `get-variables-id` を実行
3. **開発者ツールのコンソール**を開く（ブラウザ版Figmaの場合）
   - Chrome: `F12` または `右クリック` → `検証` → `Console`タブ
   - Figma Desktop App: `Ctrl+Shift+I`（Windows）/ `Cmd+Option+I`（Mac）
4. コンソールに出力されたJSON（`=== VARIABLE ID MAPPING START ===` と `=== VARIABLE ID MAPPING END ===` の間）をコピー
5. テキストエディタに貼り付けて `variable-mapping.json` として保存

## 📱 実行例

プラグインを実行すると、Figmaのnotificationに以下のようなメッセージが表示されます：

```
✅ Exported 25 variables to console!
```

コンソールには以下のような出力が表示されます：

```
🚀 Starting Variable ID export...
📊 Found 25 variables
=== VARIABLE ID MAPPING START ===
{
  "VariableID:123:456": {
    "name": "Colors/Primary/Blue",
    "value": "#3B82F6",
    "type": "COLOR",
    "collection": "VariableCollectionId:789:012"
  },
  ...
}
=== VARIABLE ID MAPPING END ===
💡 Copy the JSON from console and save as variable-mapping.json
```

## 🛠️ 開発環境

推奨エディタ：Visual Studio Code

1. [Visual Studio Code](https://code.visualstudio.com/) をダウンロード
2. このディレクトリをVS Codeで開く
3. `Terminal` → `Run Build Task...` → `npm: watch` を選択
4. ファイルを保存するたびに自動的にコンパイルされます

## 📝 注意事項

- このプラグインは**ローカルVariables**のみを取得します
- 外部ライブラリのVariablesは含まれません
- Variables が定義されていないファイルでは空の結果が返されます
- コンソール出力をコピーする際は、`=== VARIABLE ID MAPPING START ===` と `=== VARIABLE ID MAPPING END ===` の間のJSONのみをコピーしてください

## 🤝 サポート

- [Figma Plugin API Documentation](https://www.figma.com/plugin-docs/)
- [TypeScript Documentation](https://www.typescriptlang.org/)

## 📄 ライセンス

このプロジェクトのライセンスについては、プロジェクトオーナーにお問い合わせください。
