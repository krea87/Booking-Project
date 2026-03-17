import React, { useState } from "react";
import "../../App.css";
import "./BookingForm.css";

const BookingForm = ({ activeRoom }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const handleSubmit = () => {};

  return (
    <div className="form-container">
      <h3>Booking form</h3>
      <p>Your room = <span className="activeRoom">{activeRoom.alt}</span></p>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <input
            id="firstName"
            type="text"
            placeholder=" "
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label htmlFor="firstName">First name</label>
        </div>

        <div className="input-field">
          <input
            id="lastName"
            type="text"
            placeholder=" "
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
          <label htmlFor="lastName">Last name</label>
        </div>
        <div className="input-field">
          <input
            id="checkIn"
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
          />
          <label htmlFor="checkIn">Check in</label>
        </div>
        <div className="input-field">
          <input
            id="checkOut"
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
          />
          <label htmlFor="checkOut">Check out</label>
        </div>
        <button type="submit">Book now!</button>
      </form>
    </div>
  );
};

export default BookingForm;
