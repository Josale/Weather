import axios from 'axios'
import { useState } from 'react'

import { Weather } from './types/weather.type'

import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'

const URL = 'https://api.tomorrow.io/v4/weather/realtime';
const API_KEY = import.meta.env.VITE_API_KEY;

function App() {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const urlParams = `${URL}?location=${city}&apikey=${API_KEY}`;

      const response = await axios.get(urlParams);
      const data = response.data;

      setWeatherData(data);
    } catch (err) {
      setError('City not found');
    } finally {
      setIsLoading(false);
    }
  };

  console.log();


  return (
    <div className="app">
      <SearchBar fetchWeather={fetchWeather} />

      {isLoading && (
        <div className='loader'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      {error && <p className="error-toast">{error}</p>}

      {weatherData && (
        <WeatherCard weather={weatherData} />
      )}
    </div>
  );
}

export default App;