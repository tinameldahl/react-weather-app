import React from "react";
import Clock from "react-live-clock";

function LiveClock() {
    return (
    <span>
        Current time in Norway: 
        <Clock
          format={'HH:mm:ss'}
          ticking={true}
          timezone={'Europe/Oslo'} />
    </span>
    );
}

// Add timezone converter later, so that the time is shown in the time of the place you search

export default LiveClock;