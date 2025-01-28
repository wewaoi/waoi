import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// 取消注释后需要添加这行

const root = ReactDOM.createRoot(
  document.getElementById('root')!
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// 取消注释以启用性能监测
 // 或替换为你的分析服务