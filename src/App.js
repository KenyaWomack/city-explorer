import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './App.css';
import Main from './components/main';

function App() {
  const [city, setCity] = useState('');
  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');
  const [mapIsDisplaying, setMapIsDisplaying] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleCitySubmit = async (e) => {
    e.preventDefault();
    try {
      let cityUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_IQ_API_KEY}&q=${city}&format=json`;
      let cityInfo = await axios.get(cityUrl);

      setLat(cityInfo.data[0].lat);
      setLon(cityInfo.data[0].lon);
      setMapIsDisplaying(true);
      setError(false);
    } catch (error) {
      setError(true);
      setErrorMessage(error.message);
    }
  };

  const cityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <>
      <Main />
    </>
  )
}
// </>
// );
// }

export default App;