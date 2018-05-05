import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import Kayaks from './images/kayaks.jpg'
import WenonahLogo from './images/WenonahLogo.png'
import cdLogo from './images/currentDesignsLogo.png'

const CanoesKayaks = () =>
  <div className="wrapper" style={{backgroundImage: "url(" + Kayaks + ")"}}>
    <div className="ckContainer">
      <h1>Canoes & Kayaks</h1>
      <div className="canoes ckItem">
        <img alt="Wenonoh canoes logo" src={WenonahLogo}/>
        <p>&nbsp; &nbsp;{' \"A Wenonah Canoe is the only choice for people who know and \
            love canoeing. Our canoes are right for your journey, whether \
            it\'s canoeing rivers or lakes. You can choose a solo or \
            tandem canoe that meets your needs for Touring, River Touring, \
            Recreation, Performance or Expedition. Lightweight, durable and \
            technologically superior, a Wenonah Canoe will meet your needs and \
            exceed your expectations. It will provide you with years of enjoyment!\"'}
        </p>
        <p>
          {"Special orders are available, please contact us for more information."}
        </p>
      </div>
      <div className="kayaks ckItem">
        <img alt="Current Designs kayaks logo" src={cdLogo}/>
        <p>
          &nbsp; &nbsp;{"Current Designs recreational and touring kayaks are produced \
          using one of three manufacturing technologies: vacuum-bagged \
          composite lamination (fiberglass), rotational molding, and \
          thermoformed composite system. Each of these methods provides unique \
          benefits that influence factors including weight, strength, \
          durability, and price. Current Designs carries many different styles \
          to fit everyone's needs. If we do not have the model you want in \
          stock, we can special order it for you. Please call store location \
          for current pricing and availability."}<br/>
          &nbsp; &nbsp;{"Paddles are injection molded and carefully designed for \
            efficiency and grace through the water, and engineered for \
            durability and value."}
        </p>
      </div>
    </div>
  </div>


  export default CanoesKayaks
