import React, { useRef, useState } from "react";
import "../../App.css";
import "./BookingForm.css";
import BookingConfirmation from "../Modals/Confirmation/BookingConfirmation";

const BookingForm = ({ activeRoom }) => {
  const dialogRef = useRef(null);

  // data to create booking
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adultNum, setAdultNum] = useState(1);
  const [childNum, setChildNum] = useState(0);

  // to save booking in a state to send it for confirmation

  const [confirmedBooking, setConfirmedBooking] = useState(null);

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

    setConfirmedBooking(booking);
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

    dialogRef.current.showModal();
  };

  const handleBackdropClose = (e) => {
    if (e.target === dialogRef.current){
      dialogRef.current.close();
    }
  };

  return (
    <>
      <div className="form-container">
        <h3>Booking form</h3>
        <p className="activeRoom">
          Your room = <span>{activeRoom?.alt}</span>{" "}
          {/* ?. (optional chaining) returns undefined and will not crash if activeRoom is not defined - might work on a better solution later */}
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <input
              id="firstName"
              type="text"
              placeholder=" "
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
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
              required
            />
            <label htmlFor="lastName">Last name</label>
          </div>
          <div className="input-field">
            <input
              id="checkIn"
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              required
            />
            <label htmlFor="checkIn">Check in</label>
          </div>
          <div className="input-field">
            <input
              id="checkOut"
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
            <label htmlFor="checkOut">Check out</label>
          </div>
          <div className="input-field">
            <input
              id="adult"
              type="number"
              value={adultNum}
              onChange={(e) => setAdultNum(e.target.value)}
              required
            />
            <label htmlFor="adult">Adults</label>
          </div>
          <div className="input-field">
            <input
              id="child"
              type="number"
              value={childNum}
              onChange={(e) => setChildNum(e.target.value)}
              required
            />
            <label htmlFor="child">Children</label>
          </div>
          <button type="submit">Book now!</button>
        </form>
      </div>
      <div className="confirmed-booking-modal">
        <dialog ref={dialogRef} onClick={handleBackdropClose}>
          {confirmedBooking && (
            <BookingConfirmation
              confirmedBooking={confirmedBooking}
              onClose={() => dialogRef.current.close()}
            ></BookingConfirmation>
          )}
        </dialog>
      </div>
    </>
  );
};

export default BookingForm;
