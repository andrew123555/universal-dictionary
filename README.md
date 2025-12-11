# Universal Dictionary Assistant

<div align="center">

![Version](https://img.shields.io/badge/version-2.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Chrome](https://img.shields.io/badge/chrome-extension-orange.svg)

A powerful Chrome extension that helps you look up English words and translate sentences on any webpage with just one click.

[English](#english) | [繁體中文](#繁體中文)

</div>

---

## English

### ✨ Features

- 📖 **Instant Dictionary Lookup**: Select any English word to get instant dictionary definitions and pronunciation
- 🌐 **Smart Translation**: Select sentences to translate from English to Traditional Chinese
- 🎯 **Intelligent Detection**: Automatically distinguishes between single words and sentences
- 🔊 **Voice Pronunciation**: Built-in text-to-speech for American English pronunciation
- ⚡ **Universal Compatibility**: Works on all websites (BBC, YouTube, Gmail, etc.)
- 🎨 **Beautiful UI**: Gradient buttons with smooth animations
- 🚀 **Lightweight**: Less than 100ms load time, under 5MB memory usage

### 🎥 Demo

**Dictionary Lookup:**
```
1. Select a word: "beautiful"
2. Click the purple button [📖 Dictionary 🔊]
3. Opens Yahoo Dictionary + Plays pronunciation
```

**Translation:**
```
1. Select a sentence: "This is a beautiful day"
2. Click the blue button [🌐 Translate]
3. Opens Google Translate with the translation
```

### 🚀 Installation

#### Method 1: Install from Source (Recommended)

1. **Download the Extension**
   ```bash
   git clone https://github.com/andrew123555/universal-dictionary-assistant.git
   cd universal-dictionary-assistant
   ```

2. **Load in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the extension folder

3. **Start Using**
   - Visit any website with English text
   - Select a word or sentence
   - Enjoy instant lookup and translation!

#### Method 2: Manual Installation

1. Download the ZIP file from [Releases](https://github.com/andrew123555/universal-dictionary-assistant/releases)
2. Extract the ZIP file
3. Follow steps 2-3 from Method 1

### 📖 How to Use

#### Dictionary Lookup
1. **Select a single English word** (e.g., "beautiful", "amazing")
2. A **purple button** [📖 Dictionary 🔊] will appear
3. Click the button to:
   - Open Yahoo Dictionary in a new tab
   - Hear the pronunciation automatically

#### Translation
1. **Select a sentence or phrase** (e.g., "How are you?")
2. A **blue button** [🌐 Translate] will appear
3. Click the button to open Google Translate with your selection

### 💻 Technical Details

#### Technology Stack
- **JavaScript (ES6+)**: Core logic and event handling
- **CSS3**: Gradient styling and animations
- **Chrome Extension API**: Manifest V3 for modern extension development
- **Web Speech API**: Text-to-speech synthesis for pronunciation
- **DOM Manipulation**: Dynamic button creation and positioning

#### Key Features Implementation
- **Event Handling**: Uses `mousedown` event instead of `click` to solve event conflict issues
- **Cross-Site Compatibility**: Maximum z-index (2147483647) and fixed positioning ensure visibility on all sites
- **Performance Optimization**: Event delegation, efficient DOM manipulation, minimal memory footprint
- **Smart Detection**: Regular expressions to distinguish between words and sentences

#### File Structure
```
universal-dictionary-assistant/
├── manifest.json       # Extension configuration (Manifest V3)
├── content.js         # Main logic (140 lines)
├── styles.css         # Button styling
└── icon.png          # Extension icon (128x128)
```

### 🎨 Customization

#### Change Dictionary Source
Edit `content.js` line 90:
```javascript
// Default: Yahoo Dictionary
const url = `https://tw.dictionary.search.yahoo.com/search?p=${encodeURIComponent(word)}`;

// Cambridge Dictionary
const url = `https://dictionary.cambridge.org/dictionary/english/${word}`;

// Oxford Dictionary
const url = `https://www.oxfordlearnersdictionaries.com/definition/english/${word}`;
```

#### Change Translation Direction
Edit `content.js` line 175:
```javascript
// Default: English to Traditional Chinese
const url = `https://translate.google.com/?sl=en&tl=zh-TW&text=${encodeURIComponent(text)}`;

// Chinese to English
const url = `https://translate.google.com/?sl=zh-TW&tl=en&text=${encodeURIComponent(text)}`;

// English to Japanese
const url = `https://translate.google.com/?sl=en&tl=ja&text=${encodeURIComponent(text)}`;
```

#### Change Button Colors
Edit `content.js`:
```javascript
// Dictionary button (line 78): Purple gradient
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

// Translation button (line 124): Blue gradient
background: linear-gradient(135deg, #42a5f5 0%, #478ed1 100%);
```

### 🔧 Troubleshooting

**Button doesn't appear when selecting text**
- Ensure the extension is enabled in `chrome://extensions/`
- Refresh the webpage (F5)
- Check Console (F12) for any errors

**Button appears but doesn't respond to clicks**
- Check if popup windows are blocked (icon in address bar)
- Allow popups for the website
- Check Console (F12) for error messages

**Pronunciation doesn't work**
- Ensure your browser supports Web Speech API
- Check system volume settings
- Try a different browser (Chrome, Edge, Brave)

### 📊 Browser Compatibility

| Browser | Supported | Notes |
|---------|-----------|-------|
| Chrome | ✅ Yes | Full support |
| Edge | ✅ Yes | Full support |
| Brave | ✅ Yes | Full support |
| Firefox | ❌ No | Manifest V3 format differs |
| Safari | ❌ No | Different extension system |

### 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 📝 Roadmap

- [ ] Support for multiple dictionary sources
- [ ] Popup display of translation results (no new tab)
- [ ] Word history and favorites
- [ ] Custom keyboard shortcuts
- [ ] Dark mode support
- [ ] Multi-language support
- [ ] Cloud sync of settings

### ⚠️ Disclaimer

This extension works as a **linking tool** only:

- ✅ This tool does not scrape, store, or copy any content from third-party websites
- ✅ This tool only provides quick links to publicly available online services
- ✅ Yahoo Dictionary and Google Translate are trademarks of their respective owners
- ✅ This project is not affiliated with or endorsed by Yahoo or Google
- ✅ Users must comply with the terms of service of each service

### 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### 👨‍💻 Author

**Your Name**
- GitHub: @andrew123555(https://github.com/andrew123555)
- Email: bb81245g000@gmail.com

### 🙏 Acknowledgments

- Yahoo Dictionary for providing free dictionary service
- Google Translate for translation service
- Chrome Extension API documentation
- All contributors and users

### 📮 Contact

If you have any questions or suggestions, please:
- Open an issue on GitHub
- Contact via email
- Submit a pull request

---

<div align="center">

**If you find this project helpful, please consider giving it a ⭐ star!**

Made with ❤️ by [Your Name]

</div>

---

## 繁體中文

### ✨ 功能特色

- 📖 **即時查字典**：選取任何英文單字，立即查詢字典定義和發音
- 🌐 **智慧翻譯**：選取句子，快速翻譯成繁體中文
- 🎯 **智慧識別**：自動區分單字和句子
- 🔊 **語音發音**：內建美式英語發音功能
- ⚡ **全網通用**：適用於所有網站（BBC、YouTube、Gmail 等）
- 🎨 **精美介面**：漸層按鈕搭配流暢動畫
- 🚀 **輕量快速**：載入時間小於 100ms，記憶體佔用小於 5MB

### 🎥 使用展示

**查字典：**
```
1. 選取單字：「beautiful」
2. 點擊紫色按鈕 [📖 查字典 🔊]
3. 開啟 Yahoo 字典 + 播放發音
```

**翻譯句子：**
```
1. 選取句子：「This is a beautiful day」
2. 點擊藍色按鈕 [🌐 翻譯]
3. 開啟 Google 翻譯顯示翻譯結果
```

### 🚀 安裝方式

#### 方法一：從原始碼安裝（建議）

1. **下載擴充功能**
   ```bash
   git clone https://github.com/andrew123555/universal-dictionary-assistant.git
   cd universal-dictionary-assistant
   ```

2. **載入到 Chrome**
   - 開啟 Chrome 並前往 `chrome://extensions/`
   - 開啟「開發人員模式」（右上角開關）
   - 點擊「載入未封裝項目」
   - 選擇擴充功能資料夾

3. **開始使用**
   - 前往任何有英文的網站
   - 選取單字或句子
   - 享受即時查詢和翻譯！

#### 方法二：手動安裝

1. 從 [Releases](https://github.com/andrew123555/universal-dictionary-assistant/releases) 下載 ZIP 檔案
2. 解壓縮 ZIP 檔案
3. 依照方法一的步驟 2-3 進行

### 📖 使用方法

#### 查字典
1. **選取單一英文單字**（例如：「beautiful」、「amazing」）
2. 出現**紫色按鈕** [📖 查字典 🔊]
3. 點擊按鈕後：
   - 在新分頁開啟 Yahoo 字典
   - 自動播放發音

#### 翻譯句子
1. **選取句子或片語**（例如：「How are you?」）
2. 出現**藍色按鈕** [🌐 翻譯]
3. 點擊按鈕後開啟 Google 翻譯並顯示選取內容

### 💻 技術細節

#### 技術棧
- **JavaScript (ES6+)**：核心邏輯和事件處理
- **CSS3**：漸層樣式和動畫效果
- **Chrome Extension API**：使用 Manifest V3 開發現代擴充功能
- **Web Speech API**：語音合成發音功能
- **DOM 操作**：動態按鈕建立和定位

#### 核心功能實作
- **事件處理**：使用 `mousedown` 事件取代 `click` 解決事件衝突問題
- **跨網站相容性**：最高 z-index (2147483647) 和固定定位確保在所有網站都能顯示
- **效能最佳化**：事件委派、高效 DOM 操作、最小記憶體佔用
- **智慧偵測**：使用正規表達式區分單字和句子

#### 檔案結構
```
universal-dictionary-assistant/
├── manifest.json       # 擴充功能配置檔 (Manifest V3)
├── content.js         # 主要邏輯程式碼（140 行）
├── styles.css         # 按鈕樣式
└── icon.png          # 擴充功能圖示（128x128）
```

### 🎨 客製化設定

#### 更改字典來源
編輯 `content.js` 第 90 行：
```javascript
// 預設：Yahoo 字典
const url = `https://tw.dictionary.search.yahoo.com/search?p=${encodeURIComponent(word)}`;

// 改為 Cambridge 字典
const url = `https://dictionary.cambridge.org/dictionary/english/${word}`;

// 改為 Oxford 字典
const url = `https://www.oxfordlearnersdictionaries.com/definition/english/${word}`;
```

#### 更改翻譯方向
編輯 `content.js` 第 175 行：
```javascript
// 預設：英文翻繁體中文
const url = `https://translate.google.com/?sl=en&tl=zh-TW&text=${encodeURIComponent(text)}`;

// 改為中文翻英文
const url = `https://translate.google.com/?sl=zh-TW&tl=en&text=${encodeURIComponent(text)}`;

// 改為英文翻日文
const url = `https://translate.google.com/?sl=en&tl=ja&text=${encodeURIComponent(text)}`;
```

#### 更改按鈕顏色
編輯 `content.js`：
```javascript
// 查字典按鈕（第 78 行）：紫色漸層
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

// 翻譯按鈕（第 124 行）：藍色漸層
background: linear-gradient(135deg, #42a5f5 0%, #478ed1 100%);
```

### 🔧 常見問題

**選取文字後沒有出現按鈕**
- 確認擴充功能已在 `chrome://extensions/` 中啟用
- 重新整理網頁（F5）
- 檢查 Console（F12）是否有錯誤訊息

**按鈕出現但點擊沒有反應**
- 檢查網址列是否有彈出視窗封鎖圖示
- 允許該網站的彈出式視窗
- 檢查 Console（F12）是否有錯誤訊息

**發音功能無法使用**
- 確認瀏覽器支援 Web Speech API
- 檢查系統音量設定
- 嘗試使用其他瀏覽器（Chrome、Edge、Brave）

### 📊 瀏覽器相容性

| 瀏覽器 | 支援 | 備註 |
|--------|------|------|
| Chrome | ✅ 是 | 完整支援 |
| Edge | ✅ 是 | 完整支援 |
| Brave | ✅ 是 | 完整支援 |
| Firefox | ❌ 否 | Manifest V3 格式不同 |
| Safari | ❌ 否 | 擴充功能系統不同 |

### 🤝 貢獻

歡迎貢獻！請隨時提交 Pull Request。

1. Fork 此專案
2. 建立您的功能分支（`git checkout -b feature/AmazingFeature`）
3. 提交您的更改（`git commit -m 'Add some AmazingFeature'`）
4. 推送到分支（`git push origin feature/AmazingFeature`）
5. 開啟 Pull Request

### 📝 開發路線圖

- [ ] 支援多種字典來源
- [ ] 彈窗顯示翻譯結果（不需開新分頁）
- [ ] 單字歷史記錄和收藏功能
- [ ] 自訂快捷鍵
- [ ] 深色模式支援
- [ ] 多語言介面
- [ ] 設定雲端同步

### ⚠️ 免責聲明

本擴充功能僅作為**連結工具**使用：

- ✅ 本工具不會抓取、儲存或複製任何第三方網站的內容
- ✅ 本工具僅提供快速連結到公開可用的線上服務
- ✅ Yahoo 字典和 Google 翻譯是其各自所有者的商標
- ✅ 本專案與 Yahoo、Google 無任何關聯或背書關係
- ✅ 使用者需遵守各服務的使用條款

### 📄 授權

本專案採用 MIT 授權 - 詳情請參閱 [LICENSE](LICENSE) 檔案。

### 👨‍💻 作者

**您的名字**
- GitHub: @andrew123555(https://github.com/andrew123555)
- Email: bb81245g000@gmail.com

### 🙏 致謝

- Yahoo 字典提供免費字典服務
- Google 翻譯提供翻譯服務
- Chrome Extension API 文件
- 所有貢獻者和使用者

### 📮 聯絡方式

如果您有任何問題或建議，請：
- 在 GitHub 上開啟 issue
- 透過 email 聯絡
- 提交 pull request

---

<div align="center">

**如果您覺得這個專案有幫助，請給它一個 ⭐ star！**

由 YQ Wu 用 ❤️ 製作

</div>
