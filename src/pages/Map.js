import React, { Component } from 'react'

class Map extends React.Component{
  componentDidMount(){
    window.trailmap();
  }
  render(){
    return(
      <div id="trailMap">
        <div className="TrailforksWidgetMap" data-w="100%"
          data-h="400px" data-rid="3573" data-maptype="terrain"
          data-trailstyle="difficulty" data-controls="1" data-list="0"
          data-dml="1" data-layers="region" data-z="12" data-lat="46.4788273"
          data-lon="-93.9769139" data-hideunsanctioned="1">
        </div>
        <a href="https://www.trailforks.com/region/cuyuna-country-state-recreation-area/"></a>
        <a href="https://www.trailforks.com/"></a>
      </div>
    );
  }
}

export default Map;
