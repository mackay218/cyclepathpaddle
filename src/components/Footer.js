import React, {Component} from 'react'

import Directions from './Directions'
import logo from './images/cppLogo.svg'

class Footer extends Component{
  constructor(props){
    super(props);
    this.state = { year: new Date().getFullYear() };
  }

  render(){
    return(
      <footer>
        <div className="footContainer">
          <div className="infoContainer">
            <div className="footNav">
              <h4>Explore</h4>
              <a href="/">Home </a>     <a href="/About">About</a><br/>
              <a href="/ForSale">Bikes </a>    <a href="/CanoesKayaks">  Canoes/Kayaks</a><br/>
              <a href="/RentalInfo">Rental </a>   <a href="/Service">  Service</a><br/>
              <a href="/ContactPage">Contact </a>  <a href="/Photos"> Photos</a>
            </div>
            <div className="contactInfo">
              <h4>Contact</h4>
              <p>phone: 218-545-4545</p>
              <p>email: info@cyclepathpaddle.com</p>
              <h4>Visit</h4>
              <p className="address">
                115 3rd Ave SW <br/>
                Crosby, MN 56441
                </p>
              </div>
            </div>
          <div className="businessHours">
            <div className="socialLinks">
              <a href="https://www.facebook.com/cyclepathpaddle/">
                <span className="icon-facebook2"></span>
              </a>
              <a href="https://twitter.com/CyclePathPaddle">
                <span className="icon-twitter2"></span>
              </a>
              <a href="https://www.instagram.com/cycle_path_paddle/">
                <span className="icon-instagram2"></span>
              </a>
            </div>
            <h4>Winter Hours</h4>
            <p>MON-TUES: CLOSED</p>
            <p>WED-SAT: 10AM - 5PM</p>
            <p>SUN: 10AM - 2PM</p>
          </div>
          <div className="directionsContainer">
            <Directions />
          </div>
        </div>

        <div className="signature">
          &copy; {this.state.year} by Daniel MacKay <span className="icon-dmLogo5px2 dmLogo"></span>
        </div>
        <div className="footWaves"></div>
      </footer>



    );
  }

}

export default Footer;
