import React from 'react'
import ForecastList from './components/ForecastList'

export default function WeatherForecast({ forecast }) {
  if (!forecast || forecast.length === 0) return <p>Không có dữ liệu dự báo.</p>

  return (
    <div className="weather-forecast">
      <h2>Dự báo thời tiết</h2>
      <ForecastList forecast={forecast} />
    </div>
  )
}
