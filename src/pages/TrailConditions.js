import React, { Component } from 'react'
import { Timeline } from 'react-twitter-widgets'

class TrailConditions extends Component{
  componentWillUpdate(){
    window.sizeChange();
  }

  render(){
    return(

      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'CLMTBTCondition'
        }}
        options={{
          username: 'CLMTBTCondition',
          height: '400'
        }}

        />

    );
  }
}



export default TrailConditions
