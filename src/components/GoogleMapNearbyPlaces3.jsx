import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const GoogleMapNearbyPlaces3 = ({longitude, latitude, placeType}) => {
    const [map3, setMap] = useState(null);
    const [markers, setMarkers] = useState([]);
    const [currentLocationMarker, setCurrentLocationMarker] = useState(null);

   

    useEffect(() => {
        loadMap();
    }, []);

    const loadMap = () => {
        if (window.google) {
            const map3 = new window.google.maps.Map(document.getElementById('map3'), {
                center: { lat: latitude, lng: longitude },
                zoom: 30
            });
            setMap(map3);
            fetchCurrentLocation(map3);
            fetchNearbyPlaces(map3);
        }
    };

    const fetchCurrentLocation = (map3) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const pos = {
                    lat: latitude,
                    lng: longitude
                };

                map3.setCenter(pos);
                map3.setZoom(11);

                const marker = new window.google.maps.Marker({
                    position: pos,
                    map: map3,
                    title: 'My Location',
                    icon: {
                        url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png' // Blue marker icon
                    }
                });

                // Add click event listener to the marker
                marker.addListener('click', () => {
                    // Create info window for the marker
                    const infoWindow = new window.google.maps.InfoWindow({
                        content: '<h4>My Location</h4>'
                    });
                    infoWindow.open(map3, marker);
                });

                setCurrentLocationMarker(marker);
            });
        }
    };

    const fetchNearbyPlaces = (map3) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                map3.setCenter(pos);
                map3.setZoom(11);

                console.log("placeType = " + placeType);
                
                const request = {
                    location: pos,
                    radius: '5000',
                    query: [placeType] 
                };

                const service = new window.google.maps.places.PlacesService(map3);

                service.textSearch(request, (results, status) => {
                    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                        const newMarkers = results.map(place => {
                            const marker = new window.google.maps.Marker({
                                position: place.geometry.location,
                                map: map3,
                                title: place.name,
                                placeId: place.place_id
                            });


                            
                            // Add click event listener to the marker
                            marker.addListener('click', () => {
                                    getPlaceDetails(marker,map3);
                            });
                            return marker;
                        });
                        setMarkers(newMarkers);
                    }
                });
            });
        }
    };

    const getPlaceDetails = (marker,map3) => {
        const service = new window.google.maps.places.PlacesService(map3);
        const request = {
            placeId: marker.placeId,
            fields: ['name', 'formatted_address', 'formatted_phone_number', 'website', 'rating', 'opening_hours', 'types']
        };

        service.getDetails(request, (place, status) => {
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                // Construct content for info window
                const contentString = `
                    <div>
                        <h4>${place.name}</h4>
                        <p><strong>Address:</strong> ${place.formatted_address}</p>
                        <p><strong>Open Now:</strong> ${place.opening_hours && place.opening_hours.open_now ? 'Yes' : 'No'}</p>
                        <p><strong>Phone Number:</strong> ${place.formatted_phone_number}</p>
                        <p><strong>Website:</strong> <a href="${place.website}" target="_blank">${place.website}</a></p>
                   
                    </div>
                `;

                // Create info window and open it
                const infoWindow = new window.google.maps.InfoWindow({
                    content: contentString
                });
                infoWindow.open(map3, marker);
            }
        });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <div id="map3" style={{ height: '500px', width: '100%' }}></div>
                </Col>
            </Row>
        </Container>
    );
};

export default GoogleMapNearbyPlaces3;