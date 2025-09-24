```markdown
# 🌤️ PWA Weather App

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react&logoColor=white)](https://reactjs.org/) 
[![Vite](https://img.shields.io/badge/Vite-4.5.0-blueviolet?logo=vite&logoColor=white)](https://vitejs.dev/) 
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

Ứng dụng hiển thị **thời tiết hiện tại** và **dự báo ngắn hạn** dưới dạng **Progressive Web App (PWA)**, sử dụng React + Vite + OpenWeatherMap API.

---

## 🔗 Demo
- Online demo: [Chưa triển khai]  
- PWA: Có thể cài đặt trên mobile / desktop

---

## 📌 Tính năng

- Hiển thị thời tiết hiện tại theo **geolocation** hoặc tên thành phố  
- Dự báo thời tiết 5 ngày / 3 giờ  
- **Offline support** nhờ Service Worker (VitePWA)  
- Responsive: desktop, tablet, mobile  
- **Lazy load** Forecast component → giảm bundle size → tăng Lighthouse Performance  

---

## 💻 Công nghệ

- **Frontend**: React + JSX  
- **Bundler**: Vite  
- **PWA**: vite-plugin-pwa + Workbox  
- **API thời tiết**: OpenWeatherMap  
- **State management**: React Hooks (useState, useEffect)

---

## 📂 Cấu trúc dự án

```

pwa-weather-app/
│
├─ public/
│   ├─ icon-48x48.png
│   ├─ icon-72x72.png
│   └─ manifest.json
│
├─ src/
│   ├─ components/
│   │   ├─ CurrentWeather.jsx
│   │   └─ ForecastList.jsx
│   │
│   ├─ services/
│   │   └─ weatherService.js
│   │
│   ├─ WeatherForecast.jsx
│   ├─ App.jsx
│   └─ main.jsx
│
├─ package.json
├─ vite.config.js
└─ README.md

````

---

## ⚡ Cài đặt và chạy

```bash
# Cài dependencies
npm install

# Chạy dev server
npm run dev

# Build production
npm run build

# Xem preview production
npm run preview
````

* Trình duyệt mở: `http://localhost:4173` (hoặc cổng hiển thị terminal)

---

## 🌐 PWA & SEO

* **Manifest**: `/manifest.json`
* **Icons**: 48x48 → 512x512, nằm trong `public/`
* **Service Worker**: auto-register, cache API + images
* **Meta tags SEO + Open Graph** đầy đủ
* Lazy load Forecast component → tăng **Performance Lighthouse**
* Responsive + Semantic HTML + Accessibility (ARIA)

---

## 🌟 Sử dụng

1. Cho phép trình duyệt sử dụng **vị trí hiện tại**
2. Hoặc nhập **tên thành phố** → click **Tìm**
3. Xem **thời tiết hiện tại** và **dự báo**
4. Offline vẫn hiển thị dữ liệu đã cache

---

## 💡 Ghi chú

* Cần **API key OpenWeatherMap** trong `weatherService.js`
* Hình ảnh icon nên **nén nhẹ** hoặc dùng WebP để Lighthouse điểm cao hơn

---
