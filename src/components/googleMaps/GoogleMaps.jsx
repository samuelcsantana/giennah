import React, { useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = (props) => {
    const { google } = props;
    const [selectedPlace, setSelectedPlace] = useState({ name: '' })
    const [activeMarker, setActiveMarker] = useState()
    const [showingInfoWindow, setShowingInfoWindow] = useState()

    const onMarkerClick = (obj, marker, e) => {
        setSelectedPlace(obj);
        setActiveMarker(marker);
        setShowingInfoWindow(true)
    }


    return (
        <Map
            google={google}
            {...props}
        >
            <Marker
                title={'Aqui está a localização.'}
                name={props.info}
                animation={google.maps.Animation.DROP}
                onClick={onMarkerClick}
                position={props.initialCenter} />

            <InfoWindow
                marker={activeMarker}
                visible={showingInfoWindow}>
                <div>
                    <h1>{selectedPlace.name}</h1>
                </div>
            </InfoWindow>
        </Map >
    );

}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDA-y9Nq4-Op_u-CK--vDF0CRSDMUm-Y5A")
})(MapContainer)