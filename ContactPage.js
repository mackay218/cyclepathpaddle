import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import storeFront from './images/storeFront.png'


const ContactPage = () =>

  <div className="wrapper" style={{backgroundImage: "url(" + storeFront + ")"}}>
    <div className="contactContainer">
      <div className="contactBanner">
        <h2>{"Visit Us!"}</h2>
        <img className="storeFront" src={storeFront}/>
          <div className="storeAddress">
            <p className="address">
              Cycle Path & Paddle <br/>
              115 3rd Ave SW <br/>
              Crosby, MN 56441
            </p>
          </div>
      </div>
      <div className="messageContainer">
        <h2>{"We'd love to hear from you!"}</h2>
        <form id="messageForm" action="" method="POST" onsubmit="alert('Thank You!');">
          <input id="messageName" className="formInput formName"  type="text" name="name" placeholder=" Name" required/>
          <input id="messageEmail" className="formInput formEmail" type="text" name="email" placeholder=" Email Address" required/>
          <textarea id="message" className="formInput formMessage" type="text" name="message" placeholder=" Message" required></textarea>
          <input className="submitBtn" id="sendBtn" type="submit" name="send" value="Send"/>
        </form>
      </div>
      <div className="storeInfo">
        <p>phone: 218-545-4545</p>
        <p>email: info@cyclepathpaddle.com</p>
        <h4>Winter Hours</h4>
        <p>MON-TUES: CLOSED</p>
        <p>WED-SAT: 10AM - 5PM</p>
        <p>SUN: 10AM - 2PM</p>
      </div>
    </div>
  </div>

export default ContactPage
