import React from "react";
import useDarkMode from "./useDarkMode";
import PlayerCard from "./PlayerCard";

const List = props => {
  const [darkMode, setDarkMode] = useDarkMode();
  //   console.log("im the props in player card", props);

  return (
    <div>
      <div className="dark-mode__toggle">
        <div
          onClick={setDarkMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        ></div>
      </div>
      <div className="wrap">
        {props.data.map(player => (
          <PlayerCard key={player.id} data={player} />
        ))}
      </div>
    </div>
  );
};

export default List;
