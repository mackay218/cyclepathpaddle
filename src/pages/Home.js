import React, { Component } from 'react'
import{ Link} from 'react-router-dom'
import { TwitterTimelineEmbed,
  TwitterShareButton, TwitterFollowButton, TwitterHashtagButton,
  TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare,
  TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import TrailConditions from './TrailConditions'
import News from './News'

import MapModal from './MapModal'
import Weather from './Weather'
import Calendar from './Calendar'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));



const Home = () =>
  <div className="wrapper">
    <div className="homeContainer">
      <div id="hero" className="hero">
        <div id="cycleBannerContainer" className="cycleBannerContainer">
          <img id="cycleBanner" className="cycleBanner" src={images['cycleBanner.png']}/>
        </div>
        <div id="pathBannerContainer" className="pathBannerContainer">
          <img id="pathBanner" className="pathBanner" src={images['pathBanner.png']}/>
        </div>
        <div id="ampBannerContainer" className="ampBannerContainer">
          <img id="ampBanner" className="ampBanner" src={images['ampersandBanner.png']}/>
        </div>
        <div id="paddleBannerContainer" className="paddleBannerContainer">
          <img id="paddleBanner" className="paddleBanner" src={images['paddleBanner.png']}/>
        </div>
        <div id="sky" className="sky"></div>
        <img id="cloud" className="cloud" src={images['cloud.png']}/>
        <img id="trees" className="trees" src={images['pineTrees.png']}/>
        <img id="trees2" className="trees2" src={images['pineTrees.png']}/>
        <div id="water" className="water">
          <div id="canoe" className="canoe">
            <img id="canoeCutout" className="canoeCutout" src={images['canoe-cutout.png']}/>
            <div className="ripples waves2" id="waves2"></div>
            <div className="ripples waves3" id="waves3"></div>
          </div>
          <img id="manPB" className="manPB" src={images['yellowMan-paddleBoard-cutout.png']}/>
          <img id="womanPB" className="womanPB" src={images['yellowWoman-paddleBoard-cutout.png']}/>
          <div id="waves" className="waves"></div>
        </div>
        <div id="path1" className="path1"></div>
        <div id="grass" className="grass"></div>
        <div id="grass2" className="grass2"></div>
        <div id="grass3" className="grass3"></div>
        <div id="hillContainer" className="hillContainer">
          <div id="hexContainer1" className="hexContainer1">
            <div className="hexagon"></div>
          </div>
          <div id="hexContainer2" className="hexContainer2">
            <div className="hexagon"></div>
          </div>
          <div id="hexContainer3" className="hexContainer3">
            <div className="hexagon"></div>
          </div>
          <div id="hill" className="hill">
            <div id="hillShadow" className="hillShadow"></div>
          </div>
          <img id="biker" className="biker" src={images['mountainBiker.png']}/>
        </div>
      </div>
      <div id="trails" className="trails">
        <h2>Local Trails</h2>
        <div className="hill2"></div>
        <div id="trailConditions" className="trailConditions">
          <div className="conditionsContainer">
            <h3>Trail Conditions</h3>
              <div id="conditionsFeedContainter" className="twitterFeedContainer widget">
                <TrailConditions />
             </div>
          </div>
          <div id="weatherContainer" className="weatherContainer widget">
            <div className="dust dust2"></div>
              <Weather></Weather>
          </div>
          <div id="trailMapContainer" className="trailMapContainer">
            <h3>Maps</h3>
            <div className = "mapBtnContainer">
              <div className="stencilContainer">
                <img className="mnstencil" src={images['mnstencil.png']}/>
                <MapModal className="mapBtn"/>
              </div>
              <a id="dnrMap" className="dnrMap" target="_blank"
                href="http://files.dnr.state.mn.us/maps/state_parks/sra00302.pdf">
                <img className="dnrLogo" src={images['dnr.jpg']}/> Downloadable
              </a>
            </div>
          </div>
        </div>
        <div className="grass4"></div>
        <div className="grass5"></div>
        <div id="newsEvents" className="newsEvents">
          <div id="news" className="news">
            <h3>News</h3>
            <div id="newsFeedContainer" className="newsFeedContainer widget">
              <News />
            </div>
          </div>
          <div id="eventList" className="eventList">
            <h3>Events</h3>
              <Calendar />
          </div>
        </div>
        <div id="affiliates" className="affiliates">
          <a  id="clmtbBtn" className="affiliateBtn" target="_blank" href="http://www.cuyunalakesmtb.com/events.html">
            <img src={images['clmtb.png']}/>
          </a>
          <a className="affiliateBtn clmtbBtn" target="_blank" href="https://www.imba.com/engage/events">
            <img id="imbaImg" className="imbaImg" src={images['imba_black_logo.png']}/>
          </a>
          <a className="affiliateBtn" target="_blank" href="http://www.lakesproud.com/">
            <img id="lakesProud" className="lakesProud" src={images['lakesProud.png']}/>
          </a>
          <a className="affiliateBtn" target="_blank" href="https://peopleforbikes.org/">
            <img id="peopleForBikes" className="peopleForBikes" src={images['peopleForBikes.png']}/>
          </a>
          <a className="affiliateBtn" >
            <img id="onlyInMN" className="onlyInMN" src={images['onlyInMN.png']}/>
          </a>
        </div>
      </div>
    </div>
  </div>


export default Home;
