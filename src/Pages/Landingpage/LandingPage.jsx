import React, { useState } from "react";

import "../../App.css";
import "./LandingPage.css";
import Room from "../../Components/RoomsCard/Room";
import BookingForm from "../../Components/BookingForm/BookingForm";
import presidential from "../../assets/images/presidential.jpg";

const LandingPage = () => {
  const [activeRoom, setActiveRoom] = useState({
    id: 1,
    alt: "Presidential",
    image: presidential,
  });

  return (
    <>
      <header className="landing-header">
        <h1>Hotel California</h1>
      </header>

      <div className="landing-container">
        <div className="rooms-container">
          <section id="rooms">
            <Room activeRoom={activeRoom} setActiveRoom={setActiveRoom}></Room>
          </section>
        </div>

        <div className="booking-container">
          <section id="booking">
            <BookingForm activeRoom={activeRoom}></BookingForm>
          </section>
        </div>
      </div>
      <section id="contact">
        <footer>
          <address>
            <p>Hotel California</p>
            <p>Drottninggatan 112</p>
            <p>113 60 Stockholm</p>
            <p>Sweden</p>
          </address>
        </footer>
      </section>
    </>
  );
};

export default LandingPage;
