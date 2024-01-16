import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Circle } from '@react-google-maps/api';

const mapContainerStyle = {
    width: '400px',
    height: '300px',
    borderRadius: '10px',
    overflow: 'hidden',
};

const centerAddress = "1366 W Harbor Dr, Lake Zurich, IL 60047"; // Center Address

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
    radius: 5000,
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
    const [center, setCenter] = useState(null);
    const [circles, setCircles] = useState([]);

    useEffect(() => {
        geocodeAddress(centerAddress).then(setCenter);

    const surroundingLocations = [
        'Buffalo Grove Illinois',
        'Lake Zurich Illinois',
        'Libertyville Illinois',
        'Long Grove Illinois'
    ];

    Promise.all(surroundingLocations.map(address => geocodeAddress(address)))
        .then(locations => {
            setCircles(locations.map(location => ({
            center: location,
            options: circleOptions
            })));
        });
    }, []);

    return (
        <div style={{ position: 'relative' }}>
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_KEY}>
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={8}
            >
            {circles.map((circle, index) => (
                <Circle key={index} center={circle.center} options={circle.options} />
            ))}
            </GoogleMap>
        </LoadScript>
        </div>
    );
}
