import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import ForSale from './pages/ForSale'
import Service from './pages/Service'
import FitGuide from './pages/FitGuide'
import CanoesKayaks from './pages/CanoesKayaks'
import RentalInfo from './pages/RentalInfo'
import ContactPage from './pages/ContactPage'
import About from './pages/About'
import Photos from './pages/Photos'
import Employment from './pages/Employment'

import './LayoutNav.css'
import './Home.css'
import './ForSale.css'
import './Service.css'
import './FitGuide.css'
import './CanoesKayaks.css'
import './RentalInfo.css'
import './ContactPage.css'
import './About.css'
import './Photos.css'
import './Employment.css'
import './animations.css'




const App = () =>
  <Router>
    <div className="main">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/ForSale" component={ForSale}/>
        <Route exact path="/Service" component={Service}/>
        <Route exact path="/FitGuide" component={FitGuide}/>
        <Route exact path="/CanoesKayaks" component={CanoesKayaks}/>
        <Route exact path="/RentalInfo" component={RentalInfo}/>
        <Route exact path="/ContactPage" component={ContactPage}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Photos" component={Photos}/>
        <Route exact path="/Employment" component={Employment}/>
      </Switch>
      <Footer />
    </div>
  </Router>

export default App;
