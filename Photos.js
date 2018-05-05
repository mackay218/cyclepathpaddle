import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import canoeing from './images/canoeing.jpg'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));



const Photos = () =>
  <div className="wrapper" style={{backgroundImage: "url(" + canoeing + ")"}}>
    <div className="photoContainer">
      <h1>Photos</h1>
      <div className="photos">
        <img className="photo" src={images['instaSale.jpg']}/>
        <img className="photo" src={images['canoeing.jpg']}/>
        <img className="photo" src={images['fatTire.jpg']}/>
        <img className="photo" src={images['kayaks.jpg']}/>
        <img className="photo" src={images['rentalBikes.jpg']}/>
        <img className="photo" src={images['shark.jpg']}/>
        <img className="photo" src={images['bikeRiders.jpg']}/>
        <img className="photo" src={images['instaCalm.jpg']}/>
        <img className="photo" src={images['truckLogo.png']}/>
      </div>

    </div>
  </div>

export default Photos
