import React, { useState } from "react";
import "../css/JumpTo.css";

function JumpTo() {
  const [channels, setChannels] = useState([
    {
      name: "Development"
    },
    {
      name: "General"
    },
    {
      name: "Random"
    }
  ]);

  const [filteredChannel, setFiltered] = useState([""]);
  const changeChannel = () => {
    const newState = [...channels];
    newState[1].name = "Catch Up Sessions";
    setFiltered(newState);
  };
  const searchMovies = event => {
    // console.log(event.target.value);
    const getState = [...channels];
    const myFilter = getState.filter(channel => {
      return (
        channel.name.toLowerCase().indexOf(event.target.value.toLowerCase()) >
        -1
      );
    });
    // myFilter is looking for the index of ‘a’ so it would bring up cat and camel where as dog doesnt have an a so it wont show.
    // console.log(animal.indexOf(event.target.value))
    console.log(myFilter);
    setFiltered(myFilter);
  };
  return (
    <div className="jumpContainer">
      <h2> Search for channels</h2>
      <input type="text" placeholder="Jump to..." onChange={searchMovies} />
      <h2>Available Channels:</h2>
      {filteredChannel.map(el => {
        return <h3> {el.name} </h3>;
      })}
    </div>
  );
}
export default JumpTo;
