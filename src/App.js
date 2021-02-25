import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import AppBar from "./AppBar"

import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

/*const eventStyleGetter = function(event, start, end, isSelected) {
    console.log(event);
    var backgroundColor = event.color;
    var style = {
        backgroundColor: backgroundColor,
        borderRadius: '0px',
        opacity: 0.8,
        color: 'black',
        border: '0px',
        display: 'block'
    };
    return {
        style: style
    };
},*/


class App extends Component {
  state = {
    events: [
	{
start: moment("2021-01-13").toDate(),
end: moment("2021-01-13")
  .toDate(),
title: "Adhoc Release",
color: "orangered"
},{
start: moment("2021-01-27").toDate(),
end: moment("2021-01-27")
  .toDate(),
title: "Major Release",
color: "forestgreen"
},{
start: moment("2021-02-10").toDate(),
end: moment("2021-02-10")
  .toDate(),
  title: "Adhoc Release",
color: "orangered"
},{
start: moment("2021-02-24").toDate(),
end: moment("2021-02-24")
  .toDate(),
title: "Major Release",
color: "forestgreen"
},{
start: moment("2021-03-17").toDate(),
end: moment("2021-03-17")
  .toDate(), title: "Adhoc Release",
color: "orangered"
},{
start: moment("2021-03-31").toDate(),
end: moment("2021-03-31")
  .toDate(),
title: "Major Release",
color: "forestgreen"
},{
start: moment("2021-04-14").toDate(),
end: moment("2021-04-14")
  .toDate(), title: "Adhoc Release",
color: "orangered"
},{
start: moment("2021-04-28").toDate(),
end: moment("2021-04-28")
  .toDate(),
title: "Major Release",
color: "forestgreen"
},{
start: moment("2021-05-12").toDate(),
end: moment("2021-05-12")
  .toDate(), title: "Adhoc Release",
color: "orangered"
},{
start: moment("2021-05-26").toDate(),
end: moment("2021-05-26")
  .toDate(),
title: "Major Release",
color: "forestgreen"
},{
start: moment("2021-06-16").toDate(),
end: moment("2021-06-16")
  .toDate(), title: "Adhoc Release",
color: "orangered"
},{
start: moment("2021-06-30").toDate(),
end: moment("2021-06-30")
  .toDate(),
title: "Major Release",
color: "forestgreen"
},{
start: moment("2021-07-14").toDate(),
end: moment("2021-07-14")
  .toDate(), title: "Adhoc Release",
color: "orangered"
},{
start: moment("2021-07-28").toDate(),
end: moment("2021-07-28")
  .toDate(),
title: "Major Release",
color: "forestgreen"
},{
start: moment("2021-08-11").toDate(),
end: moment("2021-08-11")
  .toDate(), title: "Adhoc Release",
color: "orangered"
},{
start: moment("2021-08-25").toDate(),
end: moment("2021-08-25")
  .toDate(),
title: "Major Release",
color: "forestgreen"
},{
start: moment("2021-09-15").toDate(),
end: moment("2021-09-15")
  .toDate(), title: "Adhoc Release",
color: "orangered"
},{
start: moment("2021-09-29").toDate(),
end: moment("2021-09-29")
  .toDate(),
title: "Major Release",
color: "forestgreen"
},{
start: moment("2021-10-13").toDate(),
end: moment("2021-10-13")
  .toDate(), title: "Adhoc Release",
color: "orangered"
},{
start: moment("2021-10-27").toDate(),
end: moment("2021-10-27")
  .toDate(),
title: "Major Release",
color: "forestgreen"
},{
start: moment("2021-11-10").toDate(),
end: moment("2021-11-10")
  .toDate(), title: "Adhoc Release",
color: "orangered"
},{
start: moment("2021-11-24").toDate(),
end: moment("2021-11-24")
  .toDate(),
title: "Major Release",
color: "forestgreen"
},{
start: moment("2021-12-15").toDate(),
end: moment("2021-12-15")
  .toDate(), title: "Adhoc Release",
color: "orangered"
}
]
  };
  eventStyleGetter = function(event, start, end, isSelected) {
    console.log(event);
    var backgroundColor = event.color;
    var style = {
        backgroundColor: backgroundColor,
        borderRadius: '5px',
        opacity: 0.8,
        color: 'white',
        border: '0px',
        display: 'block'
    };
    return {
        style: style
    };
 };


  render() {
    return (
      <div className="App">
        <AppBar className="appbar"/>
        <div className="BodyContent">
          <Calendar
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            events={this.state.events}
            style={{ height: "70vh",width: "50%" }}
            eventPropGetter={(this.eventStyleGetter)}
          />
          <div className="appList__month">
	  </div>
	</div>
      </div>
    );
  }
}

export default App;
