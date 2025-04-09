import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'  // 🆕 import thêm Router
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/ui"> {/* 🧭 Đặt đúng base path */}
      <App />
    </BrowserRouter>
  </StrictMode>
)
