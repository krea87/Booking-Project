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

        <div className="info">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio cum
            minima a cupiditate odit saepe dolorum ut impedit quaerat modi nulla
            porro ad eos inventore suscipit aspernatur labore aliquam fuga,
            alias nostrum facere dignissimos quo mollitia quibusdam. Sequi
            libero doloribus quisquam pariatur magni, est, asperiores cumque
            voluptas quidem voluptatum veniam.
          </p>
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
