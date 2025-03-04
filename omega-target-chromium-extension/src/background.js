// 修改后台脚本以支持 Service Worker
// 注意：Service Worker 不能直接访问 DOM，所以需要移除任何 DOM 操作

// 添加 Service Worker 激活和安装事件处理
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// 原有的后台脚本逻辑
// ... 保留原有的业务逻辑，但需要移除任何 window、document 等 DOM 相关操作 ...

// 替换 chrome.extension.onMessage 为 chrome.runtime.onMessage
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 处理消息
});

// 替换 webRequest API 相关代码（如果有）
// 在 Manifest V3 中，webRequest API 的阻断能力被移除，需要使用 declarativeNetRequest API

// 替换 localStorage/sessionStorage 为 chrome.storage API
// Service Worker 不支持 localStorage