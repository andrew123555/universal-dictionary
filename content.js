// 全網字典助手 + 翻譯功能（方案 A：Google 翻譯）

// 顯示載入成功提示
setTimeout(() => {
  const notice = document.createElement('div');
  notice.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    z-index: 2147483647;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    font-family: Arial, sans-serif;
  `;
  notice.textContent = '✅ 字典助手 + 翻譯功能已啟動';
  document.body.appendChild(notice);
  
  setTimeout(() => {
    notice.style.transition = 'opacity 0.5s';
    notice.style.opacity = '0';
    setTimeout(() => notice.remove(), 500);
  }, 2500);
}, 500);

let button = null;

console.log('✅ 全網字典助手 + 翻譯功能已載入');

// 監聽文字選取
document.addEventListener('mouseup', function(e) {
  // 如果點擊的是按鈕，不處理
  if (button && button.contains(e.target)) {
    return;
  }
  
  const text = window.getSelection().toString().trim();
  
  // 移除舊按鈕
  if (button) {
    button.remove();
    button = null;
  }
  
  if (!text) return;
  
  // 判斷是單字還是句子
  const isSingleWord = /^[a-zA-Z\-]{1,50}$/.test(text);
  const isSentence = text.split(/\s+/).length > 1 && text.length <= 500;
  
  if (isSingleWord) {
    // 單字：顯示查字典按鈕
    showDictionaryButton(text);
  } else if (isSentence) {
    // 句子：顯示翻譯按鈕
    showTranslateButton(text);
  }
});

// 顯示查字典按鈕
function showDictionaryButton(word) {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  
  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();
  
  // 建立按鈕
  button = document.createElement('div');
  button.textContent = '📖 查字典 🔊';
  
  button.style.cssText = `
    position: fixed;
    left: ${rect.left}px;
    top: ${rect.bottom + 5}px;
    z-index: 2147483647;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 10px 18px;
    border-radius: 20px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.6);
    font-family: Arial, sans-serif;
    user-select: none;
    pointer-events: auto;
    border: 2px solid white;
  `;
  
  // 使用 mousedown 事件
  button.addEventListener('mousedown', function(e) {
    e.stopPropagation();
    e.preventDefault();
    
    console.log('🎉 查字典:', word);
    
    // 顯示提示
    showToast(`🔍 查詢：${word}`);
    
    // 開啟字典
    const url = `https://tw.dictionary.search.yahoo.com/search?p=${encodeURIComponent(word)}`;
    const newWindow = window.open(url, '_blank');
    
    if (!newWindow) {
      alert('⚠️ 彈出視窗被封鎖！\n\n請點擊網址列的圖示允許彈出式視窗。');
    }
    
    // 播放發音
    speak(word);
    
    // 移除按鈕
    setTimeout(() => {
      if (button) {
        button.remove();
        button = null;
      }
    }, 100);
  });
  
  document.body.appendChild(button);
  
  // 點擊其他地方移除按鈕
  setTimeout(() => {
    const removeButton = (e) => {
      if (button && !button.contains(e.target)) {
        button.remove();
        button = null;
        document.removeEventListener('mousedown', removeButton, true);
      }
    };
    document.addEventListener('mousedown', removeButton, true);
  }, 100);
}

// 顯示翻譯按鈕
function showTranslateButton(text) {
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  
  const range = selection.getRangeAt(0);
  const rect = range.getBoundingClientRect();
  
  // 建立按鈕
  button = document.createElement('div');
  button.textContent = '🌐 翻譯';
  
  button.style.cssText = `
    position: fixed;
    left: ${rect.left}px;
    top: ${rect.bottom + 5}px;
    z-index: 2147483647;
    background: linear-gradient(135deg, #42a5f5 0%, #478ed1 100%);
    color: white;
    padding: 10px 18px;
    border-radius: 20px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(66, 165, 245, 0.6);
    font-family: Arial, sans-serif;
    user-select: none;
    pointer-events: auto;
    border: 2px solid white;
  `;
  
  // 使用 mousedown 事件
  button.addEventListener('mousedown', function(e) {
    e.stopPropagation();
    e.preventDefault();
    
    console.log('🌐 翻譯:', text);
    
    // 顯示提示
    showToast(`🌐 正在翻譯...`);
    
    // 開啟 Google 翻譯
    const url = `https://translate.google.com/?sl=en&tl=zh-TW&text=${encodeURIComponent(text)}&op=translate`;
    const newWindow = window.open(url, '_blank');
    
    if (!newWindow) {
      alert('⚠️ 彈出視窗被封鎖！\n\n請點擊網址列的圖示允許彈出式視窗。');
    }
    
    // 移除按鈕
    setTimeout(() => {
      if (button) {
        button.remove();
        button = null;
      }
    }, 100);
  });
  
  document.body.appendChild(button);
  
  // 點擊其他地方移除按鈕
  setTimeout(() => {
    const removeButton = (e) => {
      if (button && !button.contains(e.target)) {
        button.remove();
        button = null;
        document.removeEventListener('mousedown', removeButton, true);
      }
    };
    document.addEventListener('mousedown', removeButton, true);
  }, 100);
}

// 播放發音
function speak(word) {
  if (!window.speechSynthesis) return;
  
  window.speechSynthesis.cancel();
  
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  utterance.rate = 0.85;
  
  setTimeout(() => {
    window.speechSynthesis.speak(utterance);
  }, 300);
}

// 顯示提示訊息
function showToast(message) {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.85);
    color: white;
    padding: 16px 28px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    z-index: 2147483647;
    box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    font-family: Arial, sans-serif;
  `;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 1500);
}

console.log('>>> 所有功能已設定完成');