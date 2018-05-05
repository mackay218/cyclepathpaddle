import React, { Component } from 'react'

class TrailConditions extends Component{

  render(){
    return(
      <div className="twitter-block">
        <a className="twitter-timeline"
          href="https://twitter.com/CLMTBTCondition?ref_src=twsrc%5Etfw"
          data-chrome="noheader nofooter noscrollbar transparent"
          data-tweet-limit="5"
          data-link-color="#ef611d"
          data-border-color="#ef611d"
          >
        </a>

      </div>
    );
  }
}



export default TrailConditions
