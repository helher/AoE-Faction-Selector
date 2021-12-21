import React, { useState } from "react";

export default function Example() {
  let factions = [
    "English",
    "Chinese",
    "French",
    "Holy Roman Empire",
    "Mongols",
    "Rus",
    "Delhi Sultanate",
    "Abbasid Dynasti"
  ];

  // Declare a new state variable, which we will call "faction".
  const [faction, setFaction] = useState();

  // Declare a new function, which will radomly generate an output.
  function getFaction() {
    let faction = factions[Math.floor(Math.random() * factions.length)];
    console.log(faction);
    return faction;
  }

  return (
    <div>
      <h1>Get Your Faction!</h1>
      <button onClick={() => setFaction(getFaction())}>
        <p>Retrieve</p>
      </button>

      <div className="result">
        <p>{faction}</p>
      </div>
    </div>
  );
}
