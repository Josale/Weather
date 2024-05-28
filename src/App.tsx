import axios from 'axios'
import { useState } from 'react'
import ErrorComponents from './components/ErrorComponents'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'

const API_KEY = 'F4A4xWkLqg6YAf4Te2W5Lqs1sWW3RKhJ'

interface WeatherDataProps{
  temperature: number;
  city: string;
  humidity: number;
  windSpeed: number;
}

function App() {

  const [weatherData, setWeatherData] = useState<WeatherDataProps | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=${API_KEY}`);
      const data = response.data;
      console.log(location);
      setWeatherData(data);
      console.log(data)
    } catch (err) {
      setError('City not found');
    }
    setLoading(false);
  };
  console.log(weatherData)
  return(
    <div className="app">
      <SearchBar fetchWeather={fetchWeather}/>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weatherData ? (<WeatherCard weather={weatherData} />) : (<ErrorComponents />)}
    </div>
  );
}

export default App
