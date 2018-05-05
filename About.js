import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import storeFront from './images/storeFront.png'
import truckLogo from './images/truckLogo.png'

const About = () =>
  <div className="wrapper" style={{backgroundImage: "url(" + storeFront + ")"}}>
    <div className="aboutContainer">
      <h1> About Us </h1>
      <div className="aboutInfo">
        <img alt="store front" className="storeFrontAbout" src={storeFront}/>
        <p>
          &nbsp; &nbsp; Cycle Path & Paddle opened Memorial Day weekend 2005
          in a renovated tire garage from the mining era. Owner
          Jenny Smith decided to "take a flying leap" of faith and
          open a store that promoted her passion for Outdoor Fun!
          The first 5 mile segment of the Cuyuna Lakes State Trail,
          through the Cuyuna Country State Recreation Area, was formally
          dedicated later that summer. The store started out with primarily
          hybrid and comfort bikes, kayaks and canoes. The first few years
          were a struggle and Jenny tried a variety of different approaches
          to grow the business, including opening a branch store in Pequot Lakes
          in 2008 to cater to the large resorts in the area. That lasted one year-
          live and learn!
        </p>
        <p>
          &nbsp; &nbsp; Jenny seriously considered closing the store in 2009 due to the economic
          downturn, but with the new mountain bike trail system on the horizon,
          she decided to stick it out. The trails have transformed the business
          and the community! Now mountain bikes and fat bikes take up the majority
          of floor space in the store, and stand-up paddle boards have become a
          popular addition to the rental fleet. <br/>
          <br/>
          &nbsp; &nbsp; Since the beginning exceptional customer service has been the goal. It
          is our desire to provide our customers, locals and vistors, with the
          ultimate outdoor adventure in the Cuyuna Lakes and Brainerd Lakes area.
        </p>
        <img alt="truck logo" className="truckLogo" src={truckLogo}/>
      </div>
    </div>
  </div>
  export default About
