import { SyntheticEvent, useState } from 'react';

interface SearchBarProps {
	fetchWeather: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ fetchWeather }) => {
	const [city, setCity] = useState('');

	const handleSearch = (e: SyntheticEvent<HTMLFormElement>) => {
		e.preventDefault();

		fetchWeather(city);
		setCity('');
	};

	return (
		<form className='search-bar' onSubmit={handleSearch}>
			<input
				type='text'
				value={city}
				onChange={(e) => setCity(e.target.value)}
				placeholder='Enter city'
			/>
			<button></button>
		</form>
	);
};

export default SearchBar;