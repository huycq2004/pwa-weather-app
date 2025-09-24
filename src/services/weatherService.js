const BASE = 'https://api.openweathermap.org/data/2.5'
const KEY = import.meta.env.VITE_OPENWEATHER_KEY
const UNITS = import.meta.env.VITE_OPENWEATHER_UNITS || 'metric'
const LANG = import.meta.env.VITE_OPENWEATHER_LANG || 'en'

export async function getCurrentByCoords(lat, lon) {
  const url = `${BASE}/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=${UNITS}&lang=${LANG}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Lỗi khi lấy thời tiết hiện tại')
  return res.json()
}

export async function getForecastByCoords(lat, lon) {
  const url = `${BASE}/forecast?lat=${lat}&lon=${lon}&appid=${KEY}&units=${UNITS}&lang=${LANG}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Lỗi khi lấy dự báo')
  return res.json()
}

export async function getByCityName(city) {
  const url = `${BASE}/weather?q=${encodeURIComponent(city)}&appid=${KEY}&units=${UNITS}&lang=${LANG}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Không tìm thấy thành phố')
  return res.json()
}
