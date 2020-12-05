import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [time, setTime] = useState(0);
  const handleKeydown = (event) => {
    if (event.keyCode !== 13) {
      return;
    }
    if (isNaN(event.target.value)) {
      return;
    }
    let number = Math.floor(event.target.value);
    setTime(number);
  };
  const change = () => {
    setTime((time) => time - 1);
  };
  useEffect(() => {
    if (time === 0) {
      return;
    }
    const id = setInterval(change, 1000);
    return () => {
      clearInterval(id);
    };
  }, [time]);
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input id="timeCount" onKeyDown={handleKeydown} /> sec.
        </h1>
      </div>
      <div id="current-time">{time}</div>
    </div>
  );
};

export default App;
