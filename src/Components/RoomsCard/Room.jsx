import React, { useEffect, useState } from "react";
import presidential from "../../assets/images/presidential.jpg";
import suite from "../../assets/images/suite.jpg";
import deluxe from "../../assets/images/deluxe.jpg";
import standard from "../../assets/images/standard.jpg";
import "../../App.css";
import "./Room.css";
import RoomInfo from "../RoomInfo/RoomInfo";

const Room = ({ activeRoom, setActiveRoom }) => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {

    /* AI generated text cuz of my lack of imagination ;D */
    const fakeApi = [
      {
        id: 1,
        image: presidential,
        alt: "Presidential",
        text: "Experience the pinnacle of luxury in our Presidential Suite. Spanning the entire top floor, this magnificent suite offers breathtaking views of Stockholm's skyline. Featuring a grand living room, a private dining area, and a master bedroom adorned with hand-picked furnishings, every detail has been curated for the discerning guest. Enjoy exclusive access to a personal butler, a private terrace, and a marble bathroom with a deep soaking tub. Whether you're here for business or leisure, the Presidential Suite delivers an unmatched experience.",
      },

      {
        id: 2,
        image: suite,
        alt: "Suite",
        text: "Our Suite is the perfect blend of elegance and comfort. With a spacious separate living area, floor-to-ceiling windows, and a king-size bed dressed in premium linens, relaxation comes naturally. The suite features a luxurious bathroom with a rainfall shower and a freestanding bathtub. Guests enjoy complimentary access to our spa facilities and a welcome bottle of champagne upon arrival. Ideal for romantic getaways or those simply looking to treat themselves to something special.",
      },

      {
        id: 3,
        image: deluxe,
        alt: "Deluxe",
        text: "The Deluxe Room offers a sophisticated retreat in the heart of Stockholm. Thoughtfully designed with modern furnishings and warm tones, the room features a king-size or twin bed, a cozy seating area, and a well-appointed en-suite bathroom with a walk-in shower. A large window frames beautiful city or garden views, making it the perfect place to unwind after a day of exploring. High-speed Wi-Fi, a minibar, and a smart TV are included as standard.",
      },

      {
        id: 4,
        image: standard,
        alt: "Standard",
        text: "Our Standard Room is designed with your comfort in mind, offering everything you need for a pleasant and relaxing stay. Featuring a comfortable double bed, a modern private bathroom, and a bright, airy atmosphere, it strikes the perfect balance between value and quality. Located throughout the hotel, Standard Rooms are ideal for solo travelers or couples looking for a cozy base from which to explore Stockholm. Complimentary Wi-Fi and daily housekeeping are included.",
      },
    ];
    setRooms(fakeApi);
    setActiveRoom(fakeApi[0]);
  }, []);

  return (
    <>
      <h2>Pick your room</h2>
      <div className="rooms-container">
        <div className="btn-container">
          {rooms.map((room) => (
            <button
              key={room.id}
              className={`booking-btn ${activeRoom.id === room.id ? "active" : ""}`}
              onClick={() => {
                setActiveRoom(room);
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
        <div className="room-info">
          <RoomInfo activeRoom={activeRoom}></RoomInfo>
        </div>
      </div>
    </>
  );
};

export default Room;
