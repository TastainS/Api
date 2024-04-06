import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState('');

  const fetchData = async () => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=60748ee1e388a0a80dca9c34eaa293c4`);
    setData(response.data);
  };

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      fetchData();
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        {data && (
          <div className="weather-data">
            <h1>{data.name}</h1>
            <p>Temperature: {data.main.temp}°F</p>
            <p>Feels Like: {data.main.feels_like}°F</p>
            <p>Humidity: {data.main.humidity}%</p>
            <p>Wind Speed: {data.wind.speed} MPH</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
