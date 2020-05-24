import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './styles.css';

export class Mapping extends Component{
  constructor(props){
    super(props);
    this.state = {
      stores: [
        {lat: -8.587211, lng: 115.205986, place: 'Pos Indomaret Darmasaba'},
        {lat: -8.656030, lng: 115.216839, place: 'location 2'},
        {lat: -8.695510, lng: 115.187149, place: 'location 3'},
        {lat: -8.648155, lng: 115.269443, place: 'location 4'},
        {lat: -8.610987, lng: 115.221168, place: 'location 5'},
        {lat: -8.629764, lng: 115.241130, place: 'location 6'},
        {lat: -8.639392, lng: 115.254053, place: 'location 7'},
        {lat: -8.706587, lng: 115.219946, place: 'location 8'},
        {lat: -8.636795, lng: 115.197388, place: 'location 9'}
      ]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.lat,
        lng: store.lng
      }}
      />
    })
  }
  render(){
    return(<Map google={this.props.google} zoom={12}
      initialCenter={{ lat: -8.670458, lng: 115.212631 }}
    >
      {this.displayMarkers()}
    </Map>)
  }
}

export default GoogleApiWrapper({
  apiKey: (process.env.API_KEY)
})(Mapping)