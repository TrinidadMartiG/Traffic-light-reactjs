import React, { useState } from "react";

let TrafficLight = () => {
  const [selectedColor, setColor] = useState("null");

  return (
    <div className="box"> 
    <h1>Traffic Light</h1>
    <p>Click one!</p>
      <div className="top"></div>
      <div className="blackbox">
        <div
          onClick={() => setColor("red")}
          className={"red" + (selectedColor === "red" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setColor("yellow")}
          className={"yellow" + (selectedColor === "yellow" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setColor("green")}
          className={"green" + (selectedColor === "green" ? " glow" : "")}
        ></div>
      </div>
      <p className="footer">Made by Trini &hearts;</p>
    </div>
  );
};

export default TrafficLight;
