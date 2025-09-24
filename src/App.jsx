import React, { useEffect, useState, Suspense } from 'react'
import { getCurrentByCoords, getForecastByCoords, getByCityName } from './services/weatherService'
import CurrentWeather from './components/CurrentWeather'

// Lazy load WeatherForecast
const WeatherForecast = React.lazy(() => import('./WeatherForecast'))

export default function App() {
  const [current, setCurrent] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [cityInput, setCityInput] = useState('')

  async function fetchByCoords(lat, lon) {
    try {
      setLoading(true); setError(null)
      const [c, f] = await Promise.all([getCurrentByCoords(lat, lon), getForecastByCoords(lat, lon)])
      setCurrent(c); setForecast(f)
    } catch (err) {
      setError(err.message)
    } finally { setLoading(false) }
  }

  async function fetchByCity(city) {
    try {
      setLoading(true); setError(null)
      const c = await getByCityName(city)
      const f = await getForecastByCoords(c.coord.lat, c.coord.lon)
      setCurrent(c); setForecast(f)
    } catch (err) {
      setError(err.message)
    } finally { setLoading(false) }
  }

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Trình duyệt không hỗ trợ Geolocation')
      return
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => fetchByCoords(pos.coords.latitude, pos.coords.longitude),
      (err) => {
        console.warn('Geolocation error', err)
        fetchByCity('Ho Chi Minh')
      },
      { timeout: 10000 }
    )
  }, [])

  return (
    <div className="app">
      <header>
        <h1>PWA Weather App</h1>
        <form onSubmit={(e)=>{ e.preventDefault(); if(cityInput) fetchByCity(cityInput) }}>
          <input value={cityInput} onChange={e=>setCityInput(e.target.value)} placeholder="Nhập tên thành phố" />
          <button type="submit">Tìm</button>
        </form>
      </header>

      {loading && <p>Đang tải...</p>}
      {error && <p style={{color:'red'}}>{error}</p>}

      <CurrentWeather data={current} />

      {/* Lazy load Forecast */}
      {forecast && (
        <Suspense fallback={<p>Đang tải dự báo thời tiết...</p>}>
          <WeatherForecast forecast={forecast} />
        </Suspense>
      )}

      <footer>
        <small>API: OpenWeatherMap • PWA demo</small>
      </footer>
    </div>
  )
}
