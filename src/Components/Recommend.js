import React from "react";

import "./Styling/Recommend.css";


function Recommend(props) {
    if (props.temp > 30) {
        return (
            <span className="recommend">
                {" "}and its hella hot 😈
            </span>
        )
    }
    else if (props.temp > 25) {
    return (
        <span className="recommend">
             {" "}and it is very warm today! 😅
        </span>
    ) 
    } else if (props.temp > 15) {
        return (
            <span className="recommend">
               {" "}and it is t-shirt weather today! 👕
            </span>
        )
    } else if (props.temp > 10) {
        return (
            <span className="recommend">
                {" "}and it is probably jacket weather 🧥
            </span>
        )
    } else if (props.temp > 1) {
        return (
            <span className="recommend">
                {" "} and you know what, it is quite cold! 🧣
            </span>
        )

    } else if (props.temp >= -10) {
        return (
            <span className="recommend">
                {" "} and it is hella cold 😱
            </span>
        )
    }
    
    else {
        return (
            <span className="recommend">
              {" "} and you should stay inside 💀
            </span>
)}
}

export default Recommend;