import React from 'react'

export default function CurrentWeather({ data }) {
  if (!data) return null
  const { name, weather, main, wind } = data
  const w = weather && weather[0]
  return (
    <div className="card">
      <h2>{name}</h2>
      <div className="row">
        <div>
          <img
            alt={w?.description}
            src={`https://openweathermap.org/img/wn/${w?.icon}@2x.png`}
            width={80}
            height={80}
          />
        </div>
        <div>
          <div style={{ fontSize: '2rem' }}>{Math.round(main.temp)}°</div>
          <div>{w?.description}</div>
          <div>Feels like: {Math.round(main.feels_like)}°</div>
          <div>Humidity: {main.humidity}%</div>
          <div>Wind: {wind.speed} m/s</div>
        </div>
      </div>
    </div>
  )
}
