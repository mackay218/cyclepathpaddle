import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import BikeRepair from './images/bikeRepair.png'


function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));


const Service = () =>
  <div className="wrapper" style={{backgroundImage: "url(" + BikeRepair + ")"}}>
    <div className="serviceContainer">
      <h1>Bike Repair & Service</h1>
      <div className="serviceInfo">
        <img alt="repair shop" src={images['bikeRepair.png']}/>
        <p>
          &nbsp; &nbsp; If something is wrong with your bike, Cycle Path & Paddle's goal
          is to make the necessary repairs quickly and at the best
          possible price. We can often take care of small repairs quickly,
          and get your bike back to you in the same day.
        </p>
        <p>
          &nbsp; &nbsp; We offer installation on our full line of parts and accessories.
          Not sure what you need? Our staff will help you pick out and
          install the perfect accessory for your bike!
        </p>
        <img alt="handle bar grip" src={images['handleGrip.png']}/>
        <img alt="bike mechanic" src={images['bikeTech.png']}/>
        <p>
          &nbsp; &nbsp; We service all brands and models of bikes!
          Whether you've got an old classic you want to get riding again,
          or want to keep your current bike in perfect working order,
          you can trust your bike with our trained mechanics.
        </p>
        <p>
          &nbsp; &nbsp; Cycle Path & Paddle has a fully trained, experienced service
          department ready to handle all of your bicycle repair/service
          needs. Whether you need a simple adjustment or a performance
          overhaul, our trained mechanics will get you safely back out riding.
        </p>
        <img alt="bike gears" src={images['gearChain.png']}/>
      </div>

    </div>
  </div>

export default Service
