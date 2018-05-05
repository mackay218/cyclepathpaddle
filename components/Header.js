import React, {Component} from 'react'
import {Nav, Navbar, NavbarBrand, NavbarCollapse, NavbarHeader, NavBarToggle,
        NavDropdown, NavItem, NavLink, Dropdown, DropdownMenu, DropdownToggle,
        DropdownButton, MenuItem} from 'react-bootstrap'

import {LinkContainer} from 'react-router-bootstrap'
import logo from './images/cppLogo.svg'
import wood from './images/wood.jpg'
import './icon.css'

class Header extends Component {
  componentDidMount(){
    window.hamSpin();
  }
  render() {
    return(

      <header>
        <img className="wood" src={wood}/>
        <div className="shadow"></div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"><img className="navLogo" src={logo}/></a>
            </Navbar.Brand>
            <Navbar.Toggle>
              <div id="hamburger" className="hamburger--spin">
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </Navbar.Toggle>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/">
                Home <span className="icon-home3"></span>
              </NavItem>
              <NavDropdown eventKey={2} title={<span className="bikesBtn" >Bikes <i className="icon-mountain-bike"></i></span>} id="bike-dropdown"
              noCaret>
                <MenuItem eventKey={2.1} href="/ForSale">For Sale <span className="icon-mountain-bike"></span></MenuItem>
                <MenuItem eventKey={2.2} href="/Service">Service <span className="icon-wrench2"></span></MenuItem>
                <MenuItem eventKey={2.3} href="/FitGuide">Fit Guide <span className="icon-ruler"></span></MenuItem>
              </NavDropdown>
              <NavItem eventKey={3} href="/CanoesKayaks">
                Canoes/Kayaks <span className="icon-kayak"></span>
              </NavItem>
              <NavDropdown eventKey={4} title={<span>Rental <i className="icon-checkmark22"></i></span>} id="rental-dropdown"
              noCaret>
                <MenuItem eventKey={4.1} href="/RentalInfo">Rental info <span className="icon-info"></span></MenuItem>
                <MenuItem eventKey={4.2} href="https://recreogo.com/consumer/cycle-path-and-paddle" target="_blank">Reserve Online</MenuItem>
              </NavDropdown>
              <NavItem eventKey={5} href="/ContactPage">
                Contact <span className="icon-paperplane"></span>
              </NavItem>
              <NavDropdown eventKey={6} title="More..." id="more-dropdown" noCaret>
                <MenuItem eventKey={6.1} href="/About">About Us <span className="icon-cogs"></span></MenuItem>
                <MenuItem eventKey={6.2} href="/Photos">Photos <span className="icon-images2"></span></MenuItem>
                <MenuItem eventKey={6.3} href="/Employment">Employment <span className="icon-profile2"></span></MenuItem>
              </NavDropdown>

            </Nav>
          </Navbar.Collapse>
        </Navbar>

      </header>
    );
  }
}

export default Header;
