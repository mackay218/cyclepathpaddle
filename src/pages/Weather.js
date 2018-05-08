import React, { Component } from 'react'


class Weather extends React.Component{
  componentDidMount(){
    window.weather();
  }


  render(){
      return(
        <a className="weatherwidget-io"
            href="https://forecast7.com/en/46d48n93d96/crosby/?unit=us"
            data-label_1="Crosby Minnesota" data-label_2="WEATHER"
            data-font="Roboto"
            data-icons="Climacons Animated"
            data-theme="original"
            data-basecolor="rgba(255,255,255, 0)"
            data-textcolor="#000" data-highcolor="#ef611d"
            data-lowcolor="#41a4f0" data-suncolor="#e5e10f"
            data-mooncolor="#f0ec47" data-cloudcolor="#777"
            data-cloudfill="#fff" data-raincolor="#41a4f0"
            data-snowcolor="#fff" >Crosby Minnesota WEATHER>
        </a>


      );
  }
}

export default Weather;
