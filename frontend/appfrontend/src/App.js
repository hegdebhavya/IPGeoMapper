// src/App.js
import React from 'react';
import IPGeolocationForm from './components/IPGeolocationForm';
import GeolocationData from './components/GeolocationData';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>IP Geolocation Search</h1>
      <IPGeolocationForm />
      <GeolocationData />
    </div>
  );
}

export default App;
