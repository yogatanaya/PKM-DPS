import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
class About extends React.Component{
  render(){
    return(<div className="container center">
        <div className="row justify-content-center">
          <h3 style={{
            fontWeight: '800',
            letterSpacing: '0.2em'
          }}>Tentang PKM (Pembatasan Kegiatan Masyarakat)</h3>
        </div>
        <hr style={{ width: '10%' }}/>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <p id="text-about">
              Berkaitan dengan pandemi Covid 19 Pemerintah Kota Denpasar memberlakukan 
              Pembatasan Kegiatan Masyarakat (PKM) terhitung mulai tanggal
              15 mei s/d 14 Juni 2020. Bagi krama yang ingin keluar dan masuk Denpasar
              agar membawa identitas dan tujuan yang jelas, karena wilayah perbatasan akan dijaga 
              oleh tim gabungan Polisi, TNI Dishub, Pecalang, Satgas Covid-19, dan Dinas Kesehatan.
              <br/>
              <small><i>Sumber: Instagram @denpasar.viral</i></small>
            </p>
          </div>
        </div>
        <hr style={{ width: '10%' }}/>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Link to="/map" className="btn btn-lg btn-location">Peta Lokasi</Link>
          </div>
        </div>
   
    </div>)
  }
}
export default About;