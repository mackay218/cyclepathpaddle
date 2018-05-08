import React, { Component } from 'react'
import Iframe from 'react-iframe'

class Directions extends Component{
  render(){

    return(
      <div>
        <Iframe
            url="https://www.google.com/maps/embed/v1/place?q=115+3rd+Ave+SW,+Crosby,+MN+56441&key=AIzaSyA6i7WbH6EXzW6q_MnOhdt6efaxMFuvVF8"
            className="googleMap"
        />
      </div>

    );

  }

}

export default Directions;
