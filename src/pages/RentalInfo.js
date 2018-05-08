import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import Bikes from './images/rentalBikes.jpg'

import DeliveryModal from './DeliveryModal'

const RentalInfo = () =>
  <div className="wrapper" style={{backgroundImage: "url(" + Bikes + ")"}}>
    <div className="rentalInfoContainer">
      <h1>Rental Info</h1>

      <a href="https://recreogo.com/consumer/cycle-path-and-paddle"
        target="_blank" className="reserveBtn">
        Reserve Online
      </a>
      <p>Or call 218-545-4545</p>

      <div className="tableContainer">
        <h3>Mountain Bike Rates</h3>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Half Day</th>
              <th>Full Day</th>
              <th>24 Hours</th>
            </tr>
            <tr>
              <td>Basic Disc Hard Tail</td>
              <td>$29</td>
              <td>$42</td>
              <td>$60</td>
            </tr>
            <tr>
              <td>Hard Tail</td>
              <td>$39</td>
              <td>$49</td>
              <td>$65</td>
            </tr>
            <tr>
              <td>Child</td>
              <td>$29</td>
              <td>$42</td>
              <td>$60</td>
            </tr>
            <tr>
              <td>Fat Bikes</td>
              <td>$49</td>
              <td>$69</td>
              <td>$85</td>
            </tr>
            <tr>
              <td>Full Suspension Bike</td>
              <td>$59</td>
              <td>$79</td>
              <td>$95</td>
            </tr>
            <tr>
              <td>Full Susp. Plus</td>
              <td>$69</td>
              <td>$89</td>
              <td>$109</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="tableContainer">
        <h3>Road Bike Rates</h3>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Hourly</th>
              <th>Half Day</th>
              <th>Full Day</th>
              <th>24 Hours</th>
            </tr>
            <tr>
              <td>Road Bikes</td>
              <td>$15</td>
              <td>$20</td>
              <td>$30</td>
              <td>$45</td>
            </tr>
            <tr>
              <td>Tandem</td>
              <td>$20</td>
              <td>$30</td>
              <td>$45</td>
              <td>$60</td>
            </tr>
            <tr>
              <td>Tug-a-Bug</td>
              <td>$7</td>
              <td>$15</td>
              <td>$25</td>
              <td>$25</td>
            </tr>
            <tr>
              <td>Child Trailer</td>
              <td>$7</td>
              <td>$15</td>
              <td>$25</td>
              <td>$25</td>
            </tr>
          </tbody>
        </table>
        <p>*Helmet Included with all bike rentals</p>
      </div>
      <div className="tableContainer waterCraft">
        <h3>Canoe, Kayak & Paddle Board Rates</h3>
        <table>
          <tbody>
            <tr>
              <th></th>
              <th>Half Day</th>
              <th>Full Day</th>
              <th>2 days</th>
              <th>3 day</th>
              <th>4 days</th>
              <th>5 days</th>
              <th>Week</th>
            </tr>
            <tr>
              <td>Canoe</td>
              <td>$45</td>
              <td>$55</td>
              <td>$85</td>
              <td>$120</td>
              <td>$150</td>
              <td>$175</td>
              <td>$195</td>
            </tr>
            <tr>
              <td>Kayak</td>
              <td>$40</td>
              <td>$50</td>
              <td>$75</td>
              <td>$105</td>
              <td>$130</td>
              <td>$150</td>
              <td>$170</td>
            </tr>
            <tr>
            </tr>
            <tr>
              <td>Paddle Board</td>
              <td>$45</td>
              <td>$60</td>
              <td>$100</td>
              <td>$150</td>
              <td>NA</td>
              <td>NA</td>
              <td>NA</td>
            </tr>
          </tbody>
        </table>
        <p>*Paddle & lifejacket included with rental</p>
        <DeliveryModal />
      </div>
    </div>
  </div>

export default RentalInfo
