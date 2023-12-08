import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'; 
import L from 'leaflet';
// Import components from react-leaflet
import 'leaflet/dist/leaflet.css';


const customIcon = L.icon({
    iconUrl: 'map_icon.png',
    iconSize: [32, 32], // Size of the icon image
    iconAnchor: [16, 32], // Anchor point of the icon (centered bottom)
  });

const MapView = ({ latitude, longitude }) => {
    return (
      <MapContainer
        center={[latitude, longitude]}
        zoom={13}
        style={{ height: '400px', width: '50%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[latitude, longitude]} icon={customIcon}>
        </Marker>
      </MapContainer>
    );
  };
  
  export default MapView;