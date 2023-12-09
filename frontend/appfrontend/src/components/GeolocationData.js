import React from 'react';

function GeolocationData({ geolocationData }) {
  return (
    <div className="geolocation-data">
      <h2></h2>
      {geolocationData ? (
        <div>
          <p>Country: {geolocationData.state_code}</p>
          <p>City: {geolocationData.city}</p>
          {/* Add more geolocation information here if available */}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default GeolocationData;
