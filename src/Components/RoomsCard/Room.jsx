import React, { useEffect, useState } from "react";
import presidential from "../../assets/images/presidential.jpg";
import suite from "../../assets/images/suite.jpg";
import deluxe from "../../assets/images/deluxe.jpg";
import standard from "../../assets/images/standard.jpg";
import "../../App.css";
import "./Room.css";


const Room = ({activeRoom, setActiveRoom}) => {
  
  const [rooms, setRooms] = useState([]);

  

  useEffect(() => {
    const fakeApi = [
      { id: 1, image: presidential, alt: "Presidential" },
      { id: 2, image: suite, alt: "Suite" },
      { id: 3, image: deluxe, alt: "Deluxe" },
      { id: 4, image: standard, alt: "Standard" },
    ];
    setRooms(fakeApi);
  }, []);

  

  /* Because I have set the first room as default I wanted to awoid the user being forced to press that button again.
   The [rooms, activeRoom] is to make this happen everytime there is a change to either of the two arrays */

  useEffect(() => {
    if (rooms.length > 0){
      const defaultRoom = rooms.find(room => room.id === activeRoom.id);
      localStorage.setItem("selectedRoom", defaultRoom.alt);

  }}, [rooms, activeRoom]);
  
  return (
    <>
      <h2>Book your room</h2>
      <div className="rooms-container">
        <div className="btn-container">
          {rooms.map((room) => (
            <button
              key={room.id}
              className={`booking-btn ${activeRoom.id === room.id ? "active" : ""}`}
              onClick={()  => { setActiveRoom(room);
                localStorage.setItem("selectedRoom", room.alt);
              }}
            >
              {room.alt}
            </button>
          ))}
        </div>
        {rooms.map((room) => (
          <div
            key={room.id}
            className={`room-image-wrapper ${activeRoom.id === room.id ? "active" : ""} ${activeRoom.id !== room.id ? "hidden" : ""}`}
          >
            <img src={room.image} alt={room.alt} />
          </div>
        ))}
      </div>
      
    </>
  );
};

export default Room;
