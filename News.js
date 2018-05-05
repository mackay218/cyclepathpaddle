import React, { Component } from 'react'
import Iframe from 'react-iframe'

class News extends Component{

  render(){
    return(
        <Iframe url='https://www.juicer.io/api/feeds/cyclepathpaddle/iframe'
            width="100%" className="fbFeed"
          />
    );
  }

}

export default News;
