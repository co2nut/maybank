import React, { useEffect, useRef } from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import { updateLocations } from '../actions/searches-actions'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 1.5146658,
  lng: 103.8096063
};

function Map(props) {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCAzoQjymvtTAXqzBPB4oI8Z4poIGMX4Qg"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={props.searches.currentLocation}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

function mapStateToProps(state) {
  return {
    searches: state.searches
  }
}

function mapDispatchProps(dispatch) {
  return bindActionCreators({
    updateLocations:updateLocations
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchProps)(Map);