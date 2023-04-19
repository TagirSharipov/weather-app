'use client';
import styles from './DayWeather.module.css';

interface Weather {
  date: string,
  date_epoch: number,
  day: {
      maxtemp_c: number,
      daily_will_it_rain: number,
      daily_chance_of_rain: number,
      daily_will_it_snow: number,
      daily_chance_of_snow: number,
      condition: {
          text: string,
          icon: "//cdn.weatherapi.com/weather/64x64/day/302.png"
      }
  },
};


const DayWeather: React.FC<{ 
  weather: Weather;
}> = (props) => {
  const date = new Date(props.weather.date_epoch * 1000);
  const today = new Date();
  let day = 'Today'
  if (!(date.getUTCDate() === today.getUTCDate() 
      && date.getUTCFullYear() === today.getUTCFullYear() 
      && date.getUTCMonth() === today.getUTCMonth())) day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][date.getUTCDay()] 

  return <div className={styles.day}>
    <div>{day}</div>
    <div><img src={props.weather.day.condition.icon} alt="" className="image" /></div>
    <div>{Math.round(props.weather.day.maxtemp_c)} °C</div>
    <div>{props.weather.day.condition.text}</div>
  </div>
}

export default DayWeather;