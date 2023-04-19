import { useState, useEffect } from 'react'
import DayWeather from "@/components/DayWeather";
import style from './forecast.module.css';

function Forecast() {
  const [data, setData] = useState()
  const [city, setCity] = useState('')
  
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const loadForecast = async () => {
      const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city || 'Rome'}&days=7&aqi=no&alerts=no`)
      if (!res.ok) setError(res.statusText)
      const data = await res.json()
      setLoading(false)
      setData(data)

    }
    loadForecast()
    
  }, [city])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No data</p>
  if (error) return <p>{error}&nbsp;<a href='/search'>Click to Reload</a></p>;

  return (
    <div className={style.container}>
      <input 
        type="text"
        placeholder='Enter city...'
        defaultValue={city}
        onKeyDown={(e) => {
          if (e.key === 'Enter') setCity(e.currentTarget.value)
        }} 
        onBlur={(e) => setCity(e.target.value)} />
      <h1>Weather in {city || 'Rome'}</h1>
      {data.forecast?.forecastday?.map((f: any) => <DayWeather weather={f} key={f.date_epoch} />)}
    </div>
  )
}

export default Forecast