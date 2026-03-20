import React, { useState } from "react";

import "../../App.css";
import "./LandingPage.css";
import Room from "../../Components/RoomsCard/Room";
import BookingForm from "../../Components/BookingForm/BookingForm";
import arrowUp from "../../assets/images/arrow-up.svg";

const LandingPage = () => {
  const [activeRoom, setActiveRoom] = useState();

  return (
    <>
      <header className="landing-header">
        <h1>Welcome to the Hotel California</h1>
      </header>
      <main>
        <div className="landing-container">
          <section id="booking">
            <div className="rooms-container">
              <Room
                activeRoom={activeRoom}
                setActiveRoom={setActiveRoom}
              ></Room>
            </div>

            <div className="booking-container">
              <BookingForm activeRoom={activeRoom}></BookingForm>
            </div>
          </section>
        </div>
      </main>
      <footer>
        <section id="contact">
          <address>
            <div className="contact-container">
              <div>
                <ul className="contact-list">
                  <li>Hotel California</li>
                  <li>Drottninggatan 112</li>
                  <li>113 60 Stockholm</li>
                  <li>Sweden</li>
                  <li>+48 8 123 45 67</li>
                </ul>
                </div>
            </div>
          </address>
        </section>
      </footer>
      <a className="back-to-top" href="#"><span aria-hidden="true"><img src={arrowUp} alt="back to the top" /></span> 
      <span className="sr-only">Go back to top</span></a>
    </>
  );
};

export default LandingPage;
