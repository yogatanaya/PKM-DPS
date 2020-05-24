import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
class Home extends React.Component{
  render(){
    return(<div className="container center">
        <div className="row justify-content-center">
          <h3>Aplikasi Mapping Wilayah Pembatasan Kegiatan Masyarakat</h3>
        </div>
        <div className="row justify-content-center">
          <h4>Kota Denpasar, Bali</h4>
        </div>
        <hr style={{ width: '10%' }}/>
        <div className="row justify-content-center">
          <div className="col-xs-6 col-sm-6 col-md-4">
            <Link to="/about" className="link btn btn-lg btn-about">
              About
            </Link>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-4">
            <Link className="link btn btn-lg btn-location" to="/map">
              Peta Lokasi
            </Link>
          </div>
        </div>
    </div>)
  }
}
export default Home;