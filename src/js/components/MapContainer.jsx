import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
import PropTypes from 'prop-types';

class MapConatiner extends React.Component{
    
render() {
    return (
        <div className='mapContainerDiv'>
            <Map google={this.props.google} zoom={14}>
     
                <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
                    
     
                <InfoWindow onClose={this.onInfoWindowClose}>
                </InfoWindow>
            </Map>
            
            
            
            
            
        </div>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: ("AIzaSyANJKV-E8CapswTgtm8ayWenBm5S-gjN5o")
})(MapConatiner);

MapConatiner.propTypes = {
  google: PropTypes.func
};