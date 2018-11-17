import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
import PropTypes from 'prop-types';

class MapContainer extends React.Component{
    
render() {
    
    
    return (
        <div className='mapContainerDiv'>
            <h4>Location</h4>
            <div className="mapDivContent">
            
            
            
            
                <Map className="innerMapDiv" 
                    google={this.props.google} 
                    initialCenter={{
                        lat: 40.854885,
                        lng: -88.081807
                    }}
                    zoom={14}>
         
                    <Marker onClick={this.onMarkerClick}
                        name={'Current location'} />
                        
         
                    <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>Hello</div>
                    </InfoWindow>
                </Map>
            </div>
            
            
        </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyANJKV-E8CapswTgtm8ayWenBm5S-gjN5o")
})(MapContainer);

MapContainer.propTypes = {
  google: PropTypes.object
};