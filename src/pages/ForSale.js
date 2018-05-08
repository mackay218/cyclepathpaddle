import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import Bikes from './images/rentalBikes.jpg'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

const ForSale = () =>
  <div className="wrapper" style={{backgroundImage: "url(" + Bikes + ")"}}>
    <div className="forSaleContainer">
      <h1>Retail Bikes</h1>
      <div className="textContainer">
        <p>Bicycles are simple, elegant, efficient fun.
          A bicycle can take you back to your childhood,
          be a vehicle for commuting, exploration and adventure,
          or simply give you a fun way to get to the local coffee
          shop. Whatever aspirations you have for riding a bicycle - fitness,
          competition, or just cruising with family and friends,
          you most likely will find the right bike for you from our line of
          RALEIGH, DIAMONDBACK, FRAMED, JAMIS, ROCKY MOUNTAIN, or SURLY bicycles.
        </p>
        <p>
          Special orders are also available for each line. Please contact us
          if you are interested or have any questions.
        </p>
      </div>

      <div className="bikeLogoContainer">
        <div className="bikeLogo">
          <img className="raleigh" alt="Raleigh bikes logo" src={images['raleighLogo.png']}/>
        </div>
        <div className="bikeLogo">
          <img className="bikeLogo diamondback" alt="Diamond Back bikes Logo" src={images['diamondBackLogo.png']}/>
        </div>
        <div className="bikeLogo">
          <img className="bikeLogo framedbikes" alt="Framed bikes logo" src={images['framedLogo.png']}/>
        </div>
        <div className="bikeLogo">
          <img className="bikeLogo jamis" alt="Jamis bikes logo" src={images['jamisbikesLogo.png']}/>
        </div>
        <div className="bikeLogo">
          <img className="bikeLogo RMB" alt="Rocky Mountain bikes logo" src={images['RMBLogo.png']}/>
        </div>
        <div className="bikeLogo">
          <img className="bikeLogo surly" alt="Surly bikes logo" src={images['surlyLogo.png']}/>
        </div>
      </div>
    </div>
  </div>

export default ForSale
