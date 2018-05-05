import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import storeFront from './images/storeFront.png'


const Employment = () =>


  <div className="wrapper" style={{backgroundImage: "url(" + storeFront + ")"}}>
    <div className="employmentContainer">
      <h1>Job Application</h1>
      <div className="appContainer">
        <form id="jobApp" method="POST" onsubmit="alert('Thank You!');">
          <input id="firstName" className="formInput half" type="text" name="firstName" placeholder="First name" required></input>
          <input id="lastName" className="formInput half" type="text" name="lastName" placeholder="Last name" required></input>
          <input id="address" className="formInput" type="text" name="Address" placeholder="Address" required></input>
          <input id="city" className="formInput half" type="text" name="City" placeholder="City" required></input>
          <input id="country" className="formInput half" type="text" name="Country" placeholder="Country" required></input>
          <input id="stateRegion" className="formInput half" type="text" name="StateRegion" placeholder="State/Region" required></input>
          <input id="zipCode" className="formInput half" type="text" name="zipCode" placeholder="Zip code" required></input>
          <input id="phone" className="formInput half " type="text" name="phone" placeholder="phone #-(###)-###-####" required></input>
          <input id="email" className="formInput half" type="text" name="email" placeholder="email" required></input>


          <p>Are you 18 years old or older?</p>
          <label>
            <input className="radioBtn" type="radio" name="age" value="yes"/>
            yes
          </label>
          <label>
            <input className="radioBtn" type="radio" name="age" value="no"/>
            no
          </label>

          <p>{"Do you have a valid Minnesota Driver's License?"}</p>
          <label>
            <input className="radioBtn" type="radio" name="driver" value="yes"></input>
            yes
          </label>
          <label>
            <input className="radioBtn" type="radio" name="driver" value="no"></input>
            no
          </label>

          <textarea className="formInput" type="text" name="relatedExperiance"
            placeholder="List related work experience" required
          ></textarea>

          <textarea className="formInput" type="text" name="why"
            placeholder="Why do you want to work at Cycle Path & Paddle?" required
          ></textarea>
          <textarea className="formInput" type="text" name="formerExperiance"
            placeholder="List last two employers with contact info" required
          ></textarea>
          <textarea className="formInput" type="text" name="resume"
            placeholder="Add Resume(optional)"
          ></textarea>
          <input className="submitBtn" id="sendBtn" type="submit" name="send" value="Send"/>

        </form>
      </div>
    </div>
  </div>


export default Employment
