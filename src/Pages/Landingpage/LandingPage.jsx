import React, { useState } from "react";

import "../../App.css";
import "./LandingPage.css";
import Room from "../../Components/RoomsCard/Room";
import BookingForm from "../../Components/BookingForm/BookingForm";

const LandingPage = () => {
  const [activeRoom, setActiveRoom] = useState();

  return (
    <>
      <header className="landing-header">
        <h1>Welcome to the Hotel California</h1>
      </header>

      <div className="landing-container">
        <section id="rooms">
          <div className="rooms-container">
            <Room activeRoom={activeRoom} setActiveRoom={setActiveRoom}></Room>
          </div>
        </section>

        <section id="booking">
          <div className="booking-container">
            <BookingForm activeRoom={activeRoom}></BookingForm>
          </div>
        </section>
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
