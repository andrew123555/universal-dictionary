# 📦 完整安裝指南 (Installation Guide)

## English Version

### Quick Start (5 minutes)

#### Step 1: Download the Extension

**Option A: Using Git**
```bash
git clone https://github.com/andrew123555/universal-dictionary-assistant.git
cd universal-dictionary-assistant
```

**Option B: Download ZIP**
1. Click the green "Code" button on GitHub
2. Select "Download ZIP"
3. Extract the ZIP file to a folder

#### Step 2: Install in Chrome

1. Open Chrome and type in the address bar:
   ```
   chrome://extensions/
   ```

2. Enable "Developer mode" (toggle in the top right corner)

3. Click "Load unpacked" button

4. Select the folder containing the extension files

5. You should see "Universal Dictionary Assistant" appear in your extensions list

#### Step 3: Test It

1. Go to any English website (e.g., https://www.bbc.com/news)

2. **Test Dictionary Feature:**
   - Select the word "beautiful"
   - A purple button [📖 Dictionary 🔊] should appear
   - Click it to open dictionary and hear pronunciation

3. **Test Translation Feature:**
   - Select "This is a beautiful day"
   - A blue button [🌐 Translate] should appear
   - Click it to open Google Translate

### Troubleshooting

#### Button doesn't appear
- Refresh the webpage (press F5)
- Check if extension is enabled in `chrome://extensions/`
- Press F12 to open Console and check for errors

#### Popup windows are blocked
- Look for the popup blocked icon in the address bar
- Click it and select "Always allow popups"

#### No pronunciation
- Check your system volume
- Try a different website
- Ensure Web Speech API is supported in your browser

---

## 繁體中文版本

### 快速開始（5 分鐘）

#### 步驟 1：下載擴充功能

**選項 A：使用 Git**
```bash
git clone https://github.com/andrew123555/universal-dictionary-assistant.git
cd universal-dictionary-assistant
```

**選項 B：下載 ZIP 檔案**
1. 點擊 GitHub 上的綠色「Code」按鈕
2. 選擇「Download ZIP」
3. 將 ZIP 檔案解壓縮到一個資料夾

#### 步驟 2：在 Chrome 中安裝

1. 開啟 Chrome 並在網址列輸入：
   ```
   chrome://extensions/
   ```

2. 啟用「開發人員模式」（右上角的開關）

3. 點擊「載入未封裝項目」按鈕

4. 選擇包含擴充功能檔案的資料夾

5. 您應該會看到「Universal Dictionary Assistant」出現在擴充功能列表中

#### 步驟 3：測試功能

1. 前往任何英文網站（例如：https://www.bbc.com/news）

2. **測試查字典功能：**
   - 選取單字「beautiful」
   - 應該會出現紫色按鈕 [📖 查字典 🔊]
   - 點擊後會開啟字典並播放發音

3. **測試翻譯功能：**
   - 選取句子「This is a beautiful day」
   - 應該會出現藍色按鈕 [🌐 翻譯]
   - 點擊後會開啟 Google 翻譯

### 疑難排解

#### 沒有出現按鈕
- 重新整理網頁（按 F5）
- 檢查擴充功能是否在 `chrome://extensions/` 中啟用
- 按 F12 開啟 Console 檢查是否有錯誤

#### 彈出視窗被封鎖
- 查看網址列是否有彈出視窗封鎖圖示
- 點擊並選擇「永遠允許彈出視窗」

#### 沒有發音
- 檢查系統音量
- 嘗試不同的網站
- 確認瀏覽器支援 Web Speech API

---

## File Structure / 檔案結構

After installation, your folder should contain:

安裝後，您的資料夾應包含：

```
universal-dictionary-assistant/
├── manifest.json          # Extension configuration / 擴充功能配置
├── content.js            # Main logic / 主要邏輯
├── styles.css            # Styling / 樣式
├── icon.png             # Icon / 圖示
├── README.md            # Documentation / 文件
├── LICENSE              # License / 授權
└── CONTRIBUTING.md      # Contribution guide / 貢獻指南
```

---

## Updating the Extension / 更新擴充功能

### English

1. Pull the latest changes:
   ```bash
   git pull origin main
   ```

2. Go to `chrome://extensions/`

3. Click the refresh icon (🔄) on the extension card

### 繁體中文

1. 拉取最新更改：
   ```bash
   git pull origin main
   ```

2. 前往 `chrome://extensions/`

3. 點擊擴充功能卡片上的重新整理圖示（🔄）

---

## Uninstalling / 解除安裝

### English

1. Go to `chrome://extensions/`
2. Find "Universal Dictionary Assistant"
3. Click "Remove"
4. Confirm removal

### 繁體中文

1. 前往 `chrome://extensions/`
2. 找到「Universal Dictionary Assistant」
3. 點擊「移除」
4. 確認移除

---

## Support / 支援

Need help? / 需要幫助？

- 📧 Email: bb81245g000@gmail.com
- 🐛 Report bugs: [GitHub Issues](https://github.com/andrew123555/universal-dictionary-assistant/issues)
- 💡 Feature requests: [GitHub Issues](https://github.com/andrew123555/universal-dictionary-assistant/issues)

---

## Next Steps / 下一步

After successful installation / 安裝成功後：

1. ⭐ Star the project on GitHub / 在 GitHub 上給專案星標
2. 📢 Share with friends who learn English / 分享給學習英文的朋友
3. 🐛 Report any bugs you find / 回報您發現的任何錯誤
4. 💡 Suggest new features / 建議新功能

---

**Enjoy your new dictionary assistant! / 享受您的新字典助手！** 🎉
