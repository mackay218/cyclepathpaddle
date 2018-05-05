import React, { Component } from 'react'
import Iframe from 'react-iframe'

class Calendar extends Component{

  render(){
    return(
      <Iframe url="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA&amp;height=50&amp;wkst=1&amp;bgcolor=%23B1440E&amp;src=admin%40cuyunalakesmtb.com&amp;color=%23B1440E&amp;src=buja1huf675k3to5vd4jr6higs%40group.calendar.google.com&amp;color=%23B1440E&amp;ctz=America%2FChicago"
            width="320px" height="250px" id="googleCal" className="googleCal"
        />
    );
  }
}

export default Calendar;
