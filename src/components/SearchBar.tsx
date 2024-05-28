import { useState } from 'react'

interface SearchBarProps {
	fetchWeather: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({fetchWeather}) => {
	const [city, setCity] = useState('');

	const handleSearch = () => {
		fetchWeather(city);
		setCity('')
	}

	return(

		<div className='search-bar'>
			<input 
			type='text'
			value={city}
			onChange={(e) => setCity(e.target.value)}
			placeholder='Enter city'
			/>
			<button onClick={handleSearch}></button>
		</div>
	);
}

export default SearchBar;