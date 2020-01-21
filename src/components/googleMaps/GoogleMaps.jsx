import React, { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = props => {
  const { info, initialCenter, google } = props;
  const [selectedPlace, setSelectedPlace] = useState({ name: '' });
  const [activeMarker, setActiveMarker] = useState();
  const [showingInfoWindow, setShowingInfoWindow] = useState();

  const onMarkerClick = (obj, marker, e) => {
    setSelectedPlace(obj);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };
  return (
    <Map google={google} {...props}>
      <Marker
        title="Aqui está a localização."
        name={info}
        animation={google.maps.Animation.DROP}
        onClick={onMarkerClick}
        position={initialCenter}
      />

      <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
        <div>
          <h1>{selectedPlace.name}</h1>
        </div>
      </InfoWindow>
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_URL_API_KEY_GOOGLEMAPS,
})(MapContainer);
