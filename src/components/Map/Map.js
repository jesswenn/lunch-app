import React, { Component } from 'react';
import GoogleMap from "react-google-map"
import GoogleMapLoader from "react-google-maps-loader"

const MY_API_KEY = "AIzaSyDwsdjfskhdbfjsdjbfksiTgnoriOAoUOgsUqOs10J0" // fake

class Map extends Component {
    constructor() {
        super();
        this.state = {
            coords: { lat: -25.363, lng: 131.044 },
            map: new google.maps.Map(
                document.getElementById('map'), {
                    zoom: 4,
                    center: coords 
                }
            ),
            marker: new google.maps.Marker({
                position: coords,
                map: map
            }),
		}
		this.initMap = this.initMap.bind(this);

    }
    render() {
        return (
            <div id='map'></div>
        );
    }
}

export default Map;