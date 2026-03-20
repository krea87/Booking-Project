import React, { useEffect, useState } from "react";
import "../../../App.css";
import "./BookingConfirmation.css";
import closeBtn from "../../../assets/images/x.svg";

const BookingConfirmation = ({ confirmedBooking, onClose }) => {
  return (
    <div className="confirmed-booking">
      <button onClick={onClose}>
        <span aria-hidden="true"><img src={closeBtn} alt="close button" /></span>
        <span className="sr-only">Close booking confirmation</span> {/* screen reader text */}
      </button>
      <h3>Thank you! Here is your booking confirmation!</h3>
      <p>
        <span>Name:</span> {confirmedBooking.firstname}{" "}
        {confirmedBooking.lastname}
      </p>
      <p>
        <span>Room:</span> {confirmedBooking.room}
      </p>
      <p>
        <span>Check-In Date:</span> {confirmedBooking.checkIn}
      </p>
      <p>
        <span>Check-Out Date:</span> {confirmedBooking.checkOut}
      </p>
      <p>
        <span>Adults:</span> {confirmedBooking.adultNum}
      </p>
      <p>
        <span>Children:</span> {confirmedBooking.childNum}
      </p>
    </div>
  );
};

export default BookingConfirmation;
