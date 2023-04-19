import DayWeather from "@/components/DayWeather";
import style from './style.module.css';

export const metadata = {
  title: 'Rome weather forecast',
  description: 'Next.js coding task',
}

export default async function Forecast() {
  const data = await getData();
  return (
    <div className={style.container}>
      <h1>Weather in Rome</h1>
      {data.forecast?.forecastday?.map((f: any) => <DayWeather weather={f} key={f.date_epoch} />)}
    </div>
  );
}
export async function getData() {
  // Fetch data from external API
  console.log('fetching')
  const res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=Rome&days=7&aqi=no&alerts=no`)
  const data = await res.json()
  return data;
}