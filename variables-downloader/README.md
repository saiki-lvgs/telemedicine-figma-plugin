# Figma Variables JSON Downloader Plugin

🔽 **Export Figma Variables as JSON, CSV, TypeScript, or CSS files with advanced preview and filtering capabilities.**

## ✨ Features

### 🎯 **Core Functionality**
- **Export Variables**: Download all local variables from your Figma document
- **Multiple Formats**: Support for JSON, CSV, TypeScript definitions, and CSS custom properties
- **Variable IDs**: Includes Figma internal variable IDs for integration purposes

### 🔍 **Advanced Preview & Search**
- **Real-time Preview**: See variables before downloading
- **Search & Filter**: Find variables by name, type, or value
- **Collection Grouping**: View variables organized by their collections
- **Type Filtering**: Filter by COLOR, FLOAT, STRING, BOOLEAN types

### 📊 **Data Management**
- **Statistics Dashboard**: View variable counts and type breakdowns
- **Validation & Warnings**: Get notified about potential issues
- **Copy Functions**: Copy individual variable IDs, names, or values
- **Collection Information**: Full collection metadata included

### 🔧 **Processing Modes**

#### Processed Mode (Default - Production Ready)
Clean Variable IDs + SCSS variable names mapping for production use
```json
{
  "5344:29738": "$primary-active",
  "5345:29739": "$primary-heading",
  "5345:29740": "$primary-active-studio-lp"
}
```

#### Raw Mode (Full Variable Data)
Complete unmodified data with all metadata, values, and types
```json
{
  "VariableID:123": {
    "name": "color/primary/bg",
    "value": { "r": 0.2, "g": 0.4, "b": 0.8, "a": 1 },
    "type": "COLOR",
    "collection": "CollectionID:456",
    "collectionName": "Design System"
  }
}
```

### 📁 **Export Formats**

#### CSV Format
```csv
ID,Name,Type,Value,Collection
"VariableID:123","primary-color","COLOR","rgba(51, 102, 204, 1)","Design System"
```

#### TypeScript Format
```typescript
export type VariableId = 
  | "VariableID:123"
  | "VariableID:124";

export interface VariableMapping {
  "VariableID:123": {
    name: "primary-color";
    type: "COLOR";
    collection: "CollectionID:456";
    collectionName: "Design System";
  };
}
```

#### CSS Custom Properties
```css
:root {
  --primary-color: rgb(51, 102, 204); /* COLOR - Design System */
  --base-spacing: 16; /* FLOAT - Design System */
}
```

## 🔧 Installation & Setup

### Prerequisites
- Figma Desktop App or Web App
- Node.js (for development)
- TypeScript compiler

### Development Setup

1. **Clone/Download the plugin files**
   ```bash
   git clone [your-repo-url]
   cd variables-downloader
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the plugin**
   ```bash
   npm run build
   ```

4. **Install in Figma**
   - Open Figma Desktop App
   - Go to `Plugins` → `Development` → `Import plugin from manifest`
   - Select the `manifest.json` file from the `variables-downloader` folder

### File Structure
```
variables-downloader/
├── manifest.json     # Plugin configuration
├── code.ts          # Main plugin logic (TypeScript)
├── code.js          # Compiled JavaScript
├── ui.html          # Plugin UI
├── package.json     # Dependencies
├── tsconfig.json    # TypeScript config
└── README.md        # This file
```

## 🚀 Usage Guide

### Basic Usage

1. **Open your Figma document** that contains variables
2. **Run the plugin**: `Plugins` → `Development` → `Variables JSON Downloader`
3. **Export variables**: Click "🚀 Export Variables"
4. **Review data**: Use the preview to check your variables
5. **Choose processing mode**: Select "Processed" (default) for production or "Raw" for complete data
6. **Choose format**: Select JSON, CSV, TypeScript, or CSS
7. **Download**: Click "💾 Download" to save the file

### Processing Mode Guide

#### When to use Processed Mode
- ✅ For production deployment
- ✅ When you need clean Variable ID → SCSS variable mapping
- ✅ For integration with existing SCSS workflows
- ✅ When file size matters

#### When to use Raw Mode
- ✅ For debugging and analysis
- ✅ When you need complete variable metadata
- ✅ For custom processing scripts
- ✅ When building your own mapping system

### Advanced Features

#### Search & Filter
- **Search by name**: Type in the search box to find specific variables
- **Filter by type**: Use type buttons (Colors, Numbers, Strings, Booleans)
- **View by collection**: Switch to collection view to see grouped variables

#### Preview Modes
- **List View**: See all variables in a simple list
- **Collection View**: Variables grouped by their collections
- **Expand/Collapse**: Toggle between limited and full preview

#### Copy Functions
Each variable has copy buttons for:
- **Copy ID**: Copy the Figma variable ID
- **Copy Name**: Copy the variable name
- **Copy Value**: Copy the formatted value

## ⚙️ Configuration

### Manifest.json
```json
{
  "name": "Variables JSON Downloader",
  "id": "variables-json-downloader",
  "api": "1.0.0",
  "main": "code.js",
  "ui": "ui.html",
  "capabilities": [],
  "enableProposedApi": false,
  "editorType": ["figma"],
  "networkAccess": {
    "allowedDomains": ["none"]
  }
}
```

### TypeScript Configuration
```json
{
  "compilerOptions": {
    "target": "es6",
    "lib": ["es6"],
    "strict": true,
    "typeRoots": ["./node_modules/@types", "./node_modules/@figma"]
  }
}
```

## 🛠 Development

### Building
```bash
npm run build
```

### TypeScript Compilation
The plugin uses TypeScript for type safety. Make sure to compile before testing:
```bash
tsc -p tsconfig.json
```

### Adding Features
1. **UI Changes**: Edit `ui.html`
2. **Plugin Logic**: Edit `code.ts`
3. **Compile**: Run `npm run build`
4. **Test**: Reload plugin in Figma

## 📋 Data Structure

### Variable Object
```typescript
interface VariableData {
  name: string;           // Variable name
  value: any;            // Variable value (depends on type)
  type: string;          // "COLOR" | "FLOAT" | "STRING" | "BOOLEAN"
  collection: string;    // Collection ID
  collectionName: string; // Human-readable collection name
  modes: number;         // Number of modes
}
```

### Statistics Object
```typescript
interface Stats {
  totalVariables: number;
  collections: number;
  typeBreakdown: Record<string, number>;
  issues: string[];
}
```

## 🚨 Troubleshooting

### Common Issues

#### "No variables found"
- **Cause**: Document has no local variables
- **Solution**: Create variables in your Figma document first

#### Plugin won't load
- **Cause**: Compilation errors or missing files
- **Solution**: Run `npm run build` and check for errors

#### Export fails
- **Cause**: Browser clipboard permissions or file system access
- **Solution**: Ensure browser allows downloads and clipboard access

#### Missing collections
- **Cause**: Variables created without collections
- **Solution**: Organize variables into collections in Figma

### Debug Mode
Open browser dev tools to see detailed console logs:
- Variable processing info
- Export statistics
- Error details with timestamps

## 🔄 Updates & Maintenance

### Version Updates
1. Update `package.json` version
2. Update `manifest.json` version if needed
3. Compile with `npm run build`
4. Test thoroughly

### Adding New Export Formats
1. Add format button in `ui.html`
2. Implement generator function
3. Update format selection logic
4. Test with various variable types

## 📄 License

MIT License - Feel free to modify and distribute.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues or questions:
- Check the troubleshooting section
- Review browser console for error details
- Ensure you have the latest Figma desktop app

---

**Made with ❤️ for the Figma community**
