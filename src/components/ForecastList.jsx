import React from 'react'

export default function ForecastList({ forecast }) {
  if (!forecast || !forecast.list) return null
  // lấy 8 items đầu (8 * 3h = 24h)
  const items = forecast.list.slice(0, 8)
  return (
    <div className="forecast">
      <h3>Dự báo ngắn hạn (24 giờ)</h3>
      <div className="forecast-row">
        {items.map((it) => {
          const dt = new Date(it.dt * 1000)
          const hour = dt.getHours()
          const w = it.weather[0]
          return (
            <div key={it.dt} className="forecast-item">
              <div>{hour}:00</div>
              <img src={`https://openweathermap.org/img/wn/${w.icon}.png`} alt={w.description} />
              <div>{Math.round(it.main.temp)}°</div>
              <div style={{ fontSize: '0.8rem' }}>{w.description}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
