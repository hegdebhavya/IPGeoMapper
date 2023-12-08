import React, { useState } from 'react';
import MapView from './MapView';

function IPGeolocationForm() {
  const [ipAddress, setIpAddress] = useState(''); // State to store the IP address
  const [geolocationData, setGeolocationData] = useState(null);// State to store geolocation data
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const handleInputChange = (e) => {
    setIpAddress(e.target.value); // Update IP address state as the user types
  };

  const fetchGeolocationData = async () => {
    try {
      // Make a GET request to your Django API with the entered IP address
      const response = await fetch(`http://localhost:8000/api/ip-geolocation/${ipAddress}/`);

      if (response.status === 200) {
        const data = await response.json();
        setGeolocationData(data);
        // Update latitude and longitude states
        setLatitude(parseFloat(data.latitude));
        setLongitude(parseFloat(data.longitude)); // Update geolocation data state with the response
      } else {
        console.error('Failed to fetch geolocation data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="ip-geolocation-form">
      <input
        type="text"
        placeholder="Enter IP Address"
        value={ipAddress}
        onChange={handleInputChange}
      />
      <button onClick={fetchGeolocationData}>Search</button>
      {geolocationData && (
        <div className="geolocation-data">
          <h2>Geolocation Data</h2>
          <p>Country: {geolocationData.country_name}</p>
          <p>City: {geolocationData.city}</p>
          {latitude && longitude && (
        <MapView latitude={latitude} longitude={longitude} />
      )}
        </div>
      )}
    </div>
  );
}

export default IPGeolocationForm;
