import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import canoeing from './images/canoeing.jpg'
import Iframe from 'react-iframe'


import InstaFeed from './InstaFeed'


const instafeedTarget = 'instafeed';

const Photos = () =>
  <div className="wrapper" style={{backgroundImage: "url(" + canoeing + ")"}}>
    <div className="photoContainer">
      <h1>Photos</h1>
      <div className="photos">
        <InstaFeed />
      </div>

    </div>
  </div>

export default Photos
