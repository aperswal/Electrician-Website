import React, { useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Circle } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '600px',
    height: '450px',
    borderRadius: '10px',
    overflow: 'hidden',
};

const centerAddress = "1366 W Harbor Dr, Lake Zurich, IL 60047";

const circleOptions = {
    strokeColor: 'rgba(255, 0, 0, 0.5)',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: 'rgba(255, 0, 0, 0.5)',
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    zIndex: 1
};

const geocodeAddress = async (address) => {
    try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
            return data.results[0].geometry.location;
        } else {
            console.error('Geocoding failed or no results:', data.status);
            return null;
        }
    } catch (error) {
        console.error('Geocoding error:', error);
        return null;
    }
};

export default function Map() {
    const [circle, setCircle] = useState(null);
    const [mapCenter, setMapCenter] = useState(null);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
        libraries: ['geometry'],
    });

    useEffect(() => {
        if (isLoaded) {
            geocodeAddress(centerAddress).then(centerLocation => {
                const surroundingLocations = [
                    'Buffalo Grove Illinois',
                    'Lake Zurich Illinois',
                    'Libertyville Illinois',
                    'Long Grove Illinois'
                ];

                Promise.all(surroundingLocations.map(address => geocodeAddress(address)))
                    .then(locations => {
                        let bounds = new window.google.maps.LatLngBounds();
                        locations.forEach(loc => {
                            if (loc) {
                                bounds.extend(new window.google.maps.LatLng(loc.lat, loc.lng));
                            }
                        });
                        const center = bounds.getCenter();
                        const radius = window.google.maps.geometry.spherical.computeDistanceBetween(center, bounds.getNorthEast());
                        setCircle({
                            center: center.toJSON(),
                            options: { ...circleOptions, radius: radius }
                        });
                        setMapCenter(centerLocation || center.toJSON());
                    });
            });
        }
    }, [isLoaded]);

    return (
        <div style={{ position: 'relative' }}>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={mapCenter}
                    zoom={10}
                >
                    {circle && (
                        <Circle
                            center={circle.center}
                            options={circle.options}
                        />
                    )}
                </GoogleMap>
            ) : <div>Loading...</div>}
        </div>
    );
}