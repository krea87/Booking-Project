import React from "react";
import "../../App.css";
import "./RoomInfo.css";

const RoomInfo = ({ activeRoom }) => {
  if (!activeRoom) return null;

  return (
    <div>
      <h3>{activeRoom.alt}</h3>
      <p>{activeRoom.text}</p>
    </div>
  );
};

export default RoomInfo;
