import React from 'react'
import getWeatherIcon from '../helpers/GetWeatherIcon'

interface WeatherCardProps {
  weather: any;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  console.log(weather);

  // Разделяем строку и берем первые две части (город и страна)
  const locationParts = weather.location.name.split(',');
  const city = locationParts[0].trim();
  const country = locationParts.length > 2 ? locationParts[locationParts.length - 1].trim() : '';

  return (
		<div className='wrapper-card'>
			<div className='weather-card-image'>
			<img src={getWeatherIcon(weather.data.values.weatherCode)} alt="weather icon" />
			</div>
			<div className='weather-card'>
				<h2 className='title'>
					{city}, {country}
				</h2>
				<h3 className='temperature'>
					{`${weather.data.values.temperature}°C`}
				</h3>
			</div>
			<div className='weather-card-second'>
				<p>Humidity: {weather.data.values.humidity}%</p>
				<p>Wind Speed: {weather.data.values.windSpeed} km/h</p>
			</div>
		</div>
  );
};
/* <p>Humidity: {weather.data.values.humidity}%</p>
<p>Wind Speed: {weather.data.values.windSpeed} km/h</p> */
export default WeatherCard;
