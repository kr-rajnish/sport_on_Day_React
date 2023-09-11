import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [selectedSport, setSelectedSport] = useState();
  const [selectedDay, setSelectedDay] = useState();

  const handleChange = (e) => {
    setSelectedSport(e.target.value);
  };
  const handleDay = (e) => {
    setSelectedDay(e.target.value);
  };
  return (
    <>
      <div className="sports">
        <lable>
          <input
            type="radio"
            value="cricket"
            onChange={handleChange}
            checked={selectedSport === "cricket"}
          />
          cricket
        </lable>
        <lable>
          <input
            type="radio"
            value="football"
            onChange={handleChange}
            checked={selectedSport === "football"}
          />
          football
        </lable>
        <lable>
          <input
            type="radio"
            value="hockey"
            onChange={handleChange}
            checked={selectedSport === "hockey"}
          />
          hockey
        </lable>
      </div>
      <div className="days">
        <lable>
          <input
            type="radio"
            value="weekday"
            onChange={handleDay}
            checked={selectedDay === "weekday"}
          />
          weekday
        </lable>
        <lable>
          <input
            type="radio"
            value="weekend"
            onChange={handleDay}
            checked={selectedDay === "weekend"}
          />
          weekend
        </lable>
      </div>
      <div className="printSportName">
        <p>
          We play {selectedSport} on {selectedDay}
        </p>
      </div>
    </>
  );
}

// OR
/*
const opction = ["Cricket", "Football", "Hockey"];
const days = ["Weekday", "Weekend"];
function Gamedays() {
  const [game, setGame] = useState();
  const [day, setDay] = useState();
  return (
    <>
      <h1>Witch Game</h1>
      {opction.map((currval) => {
        console.log(currval);
        return (
          <>
            <input
              type="radio"
              id={currval}
              name="opction"
              value={currval}
              onChange={(e) => setGame(e.target.value)}
            />
            <label>{currval}</label>
          </>
        );
      })}

      <h1>Select days</h1>
      {days.map((currval) => {
        return (
          <>
            <input
              type="radio"
              name="days"
              value={currval}
              onChange={(e) => setDay(e.target.value)}
            />
            <label>{currval}</label>
          </>
        );
      })}
      <h3>You will play</h3>
      <p>
        {game} on the {day}
      </p>
    </>
  );
}
export default Gamedays;
*/
