import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';
import './GoogleMap.scss';


const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: '#4c5766',
      padding: '20px',
      fontFamily: 'Roboto',
      fontSize: '10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );




export default class GoogleMap extends Component {


render() {
    return (
      <div className="GoogleMap">
        <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAKjOAlzIn14vl07MA96CA1fJ691QXHRBY' }}
          defaultCenter={ {
            lat: this.props.lat,
            lng: this.props.lng
          } }
          defaultZoom={ 11 }>
          <AnyReactComponent
            text={this.props.cityName}
            lat={this.props.lat}
            lng={this.props.lng}
          />
        </GoogleMapReact>
      </div>
    )
  }
}