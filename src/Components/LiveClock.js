import React from "react";
import Clock from "react-live-clock";

function LiveClock() {
    return (
    <span>
        <Clock
          format={'HH:mm:ss'}
          ticking={true}
          timezone={'Europe/Oslo'} />
    </span>
    );
}

export default LiveClock;