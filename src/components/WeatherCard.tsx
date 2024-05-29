import React from 'react';

import { Weather } from '../types/weather.type';

import getWeatherIcon from '../helpers/GetWeatherIcon';

const WeatherCard: React.FC<{ weather: Weather; }> = ({ weather }) => {
	const locationParts = weather.location.name.split(',');

	const city = locationParts[0].trim();
	const country = locationParts[locationParts.length - 1].trim();

	return (
		<div className='wrapper-card'>
			<div className='weather-card-image'>
				<img
					src={getWeatherIcon(weather.data.values.weatherCode)}
					alt="weather icon"
				/>
			</div>
			<div className='left-side'>
				<div className='weather-card'>
					<h2 className='title'>
						{city}, {country}
					</h2>
					<h3 className='temperature'>
						{`${weather.data.values.temperature}°C`}
					</h3>
				</div>
				<div className='weather-card'>
					<p>Humidity: {weather.data.values.humidity}%</p>
					<p>Wind Speed: {weather.data.values.windSpeed} km/h</p>
				</div>
			</div>
		</div>
	);
};

export default WeatherCard;
