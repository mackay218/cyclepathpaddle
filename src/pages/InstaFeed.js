import React, { Component } from 'react'
import Instafeed from 'react-instafeed';

const instafeedTarget = 'instafeed';

class InstaFeed extends Component{

  render(){
    return(
      <div id={instafeedTarget} className="feed">
        <Instafeed
          limit='20'
          ref='instafeed'
          resolution='low_resolution'
          sortBy='most-recent'
          target={instafeedTarget}
          template=''
          userId='7692752184'
          accessToken='7692752184.1677ed0.d84bb61fbafb460f925e5ef9e1e4e126'
        />
      </div>
    );
  }
}


export default InstaFeed
