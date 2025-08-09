import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { env } from '../utils/env';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const defaultCenter = {
  lat: 9.0820, // Nigeria center
  lng: 8.6753
};

function GoogleMapComponent({ companies = [] }) {
  return (
    <APIProvider apiKey={env.GOOGLE_MAPS_API_KEY}>
      <Map
        style={containerStyle}
        center={defaultCenter}
        zoom={4}
        gestureHandling={'greedy'}
        disableDefaultUI={true}
      >
        {companies.map((company, idx) => (
          <Marker
            key={idx}
            position={company.coordinates}
            title={company.name}
          />
        ))}
      </Map>
    </APIProvider>
  );
}

export default GoogleMapComponent; 