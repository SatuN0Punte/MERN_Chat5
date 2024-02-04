// นี่คือไฟล์หลักที่ใช้ในการเริ่มต้นแอป React

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';  // Import component App ที่เป็นหน้าหลักของแอป
import './index.css';  // Import stylesheet สำหรับการสไตล์เพิ่มเติม

// ใช้ ReactDOM.createRoot() เพื่อเปิด root React และใช้ render() เพื่อแสดง component App ภายใน root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
