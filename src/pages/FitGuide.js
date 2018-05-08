import React, { Component } from 'react'
import{ Link } from 'react-router-dom'
import Bikes from './images/rentalBikes.jpg'

const FitGuide = () =>
  <div className="wrapper" style={{backgroundImage: "url(" + Bikes + ")"}}>
    <div className="fitContainer">
      <h1> Bike Fit Guide </h1>
      <p>
        &nbsp; &nbsp; {"It's very important that the bike you ride fits you well. \
        When many people think about getting the correctly-sized bike, \
        they think only of the frame size. While bike manufacturers do  \
        make bikes in a variety of sizes, you should also pay attention  \
        to other ways to fit your bicycle to your body including handlebar \
        width, body position and seat height. You can do much of this work \
        yourself, but a good bike shop employee should be able to assist you \
        once you've realized you have to make some tricky adjustments to your bike."}
      </p>
      <div className="step oddStep">
        <h2>1. Stand</h2>
        <p>
          &nbsp; &nbsp; {"Stand over the frame. The general guideline is \
          about 1-3 inches for a road bike, or a hybrid bike that you'll \
          be riding around town and on pavement and more clearance for a \
          mountain bike that you'll be using off-road. You should be able \
          to stand over the bike comfortably and be able to lift it up. \
          If you can't decide definitively between two sizes that both \
          seem to fit you well, you'll test ride both of them. And then, \
          of course, you'll make other adjustments."}
        </p>
      </div>
      <div className="step">
        <h2>2. Sit</h2>
        <p>
          &nbsp; &nbsp; {" Sit on the bike saddle and pedal backwards. The seat height is \
          very important as it determines how much you leg will bend or stretch \
          when you pedal. When you're seated on the bike and you have one leg \
          extended there should be a slight bend in your knee. You shouldn't \
          have to extend your toe or shift your hip to pedal down. Another way \
          to check this is to sit on the saddle with both legs bent and feet and \
          pedals parallel to the floor. Your knee on your front foot should be \
          just about centered above the top arch of your foot."}
        </p>
      </div>
      <div className="step oddStep">
        <h2>3. Reach</h2>
        <p>
          &nbsp; &nbsp; {" Reach for the handlebars while sitting on the bike. \
          How far are you reaching for your handlebars? Your bike should feel \
          comfortable and part of this is your reach. Do you feel too stretched \
          out? Do you feel too upright? This reach can be adjusted by trading \
          out the handlebar stem for a longer or shorter one. If the reach \
          doesn't feel right, try a shorter or longer stem. A bike shop \
          employee can swap your current stem for a new one. Oftentimes, \
          bikes that are made specifically for women have a shorter top-tube, \
          which means a shorter reach. This is an option for many women, and \
          for men with short torsos."}
        </p>
      </div>
      <div className="step">
        <h2>4. Choose</h2>
        <p>
          &nbsp; &nbsp; {"Choose the right saddle. You don't have to use the \
          saddle that came on your bike. Many people buy a saddle that fits \
          them. Men and women have different needs when it comes to saddles \
          because of their differently-shaped pelvises and getting the right \
          saddle will make a significant difference when you're riding. \
          You should buy a saddle that is specific to your male or female \
          anatomy, and that is comfortable for you. Once you install the \
          saddle onto your bike make sure the nose is pointed forward and \
          the saddle is mostly parallel to the ground, it can be tipped just \
          slightly up or down to suit you."}
        </p>
      </div>
      <div className="step oddStep">
        <h2>5. Measure</h2>
        <p>
          &nbsp; &nbsp; {"Measure the handlebar width and compare it to your \
          shoulder width. These two measurements do not to be exact, but they \
          should be close for most bikes other than cruiser-style bikes that \
          can have wide handlebars. You'll want handlebars that are the right \
          width to prevent soreness in your upper back. They should be about \
          as wide as your shoulders."}
        </p>
      </div>
    </div>
  </div>
  export default FitGuide
