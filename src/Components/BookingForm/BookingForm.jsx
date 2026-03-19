import React, { useState } from "react";
import "../../App.css";
import "./BookingForm.css";

const BookingForm = ({ activeRoom }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adultNum, setAdultNum] = useState(1);
  const [childNum, setChildNum] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    // create the booking
    const booking = {
      id: crypto.randomUUID(), // random ID. Built in Web Api.
      room: activeRoom.alt,
      firstname,
      lastname,
      checkIn,
      checkOut,
      adultNum,
      childNum,
      createdAt: new Date().toISOString(), // better format
    };

    // for localstorage
    // get from bookings, if empty return null and use an empty array instead
    const existing = JSON.parse(localStorage.getItem("bookings") || "[]");
    //save to localstorage bookings
    localStorage.setItem("bookings", JSON.stringify([...existing, booking]));

    console.log("Booking saved: ", booking);

    // reset
    setFirstname("");
    setLastname("");
    setCheckIn("");
    setCheckOut("");
    setAdultNum(1);
    setChildNum(0);
  };

  return (
    <div className="form-container">
      <h3>Booking form</h3>
      <p>
        Your room = <span className="activeRoom">{activeRoom.alt}</span>
      </p>
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
        <div className="input-field">
          <input
            id="adult"
            type="number"
            value={adultNum}
            onChange={(e) => setAdultNum(e.target.value)}
          />
          <label htmlFor="adult">Adults</label>
        </div>
        <div className="input-field">
          <input
            id="child"
            type="number"
            value={childNum}
            onChange={(e) => setChildNum(e.target.value)}
          />
          <label htmlFor="adult">Children</label>
        </div>
        <button type="submit">Book now!</button>
      </form>
    </div>
  );
};

export default BookingForm;
