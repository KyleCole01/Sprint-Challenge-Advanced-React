import React from "react";

const PlayerCard = props => {
  return (
    <div className="playercard">
      <h2>Name: {props.data.name}</h2>
      <p>Country: {props.data.country}</p>
      <p>Searches: {props.data.searches}</p>
    </div>
  );
};

export default PlayerCard;
