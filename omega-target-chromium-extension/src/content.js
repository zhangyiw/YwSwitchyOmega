// 修改内容脚本以适应 Manifest V3
// 大多数内容脚本代码可以保持不变，但需要注意以下几点：

// 1. 使用 chrome.runtime.sendMessage 替代 chrome.extension.sendMessage
chrome.runtime.sendMessage({ action: 'someAction', data: someData }, (response) => {
  // 处理响应
});

// 2. 如果使用了 web_accessible_resources，访问方式需要调整
// ... 其他内容脚本逻辑 ...