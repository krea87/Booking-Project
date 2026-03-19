import React from "react";
import "../../App.css";
import "./RoomInfo.css";

const RoomInfo = ({ activeRoom }) => {
  if (!activeRoom) return null;

  return (
    <div>
      <h4>{activeRoom.alt}</h4>
      <p>{activeRoom.text}</p>
    </div>
  );
};

export default RoomInfo;
