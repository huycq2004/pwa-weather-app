import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// optional: auto SW register handled by vite-plugin-pwa.
// nhưng bạn có thể lắng nghe update event:
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    // plugin tự động đăng ký, bạn có thể thêm handlers ở đây
    console.log('Service worker setup by Vite PWA plugin (auto).')
  })
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
