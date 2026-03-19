import React, { useEffect, useState } from "react";
import "../../../App.css";
import "./BookingConfirmation.css"

const BookingConfirmation = ({confirmedBooking}) => {
  return (
    <div className='confirmed-booking'>
        <h3>Thank you! Here is your booking confirmation!</h3>
        <p><span>Name:</span> {confirmedBooking.firstname} {confirmedBooking.lastname}</p>
        <p><span>Room:</span> {confirmedBooking.room}</p>
        <p><span>Check-In Date:</span> {confirmedBooking.checkIn}</p>
        <p><span>Check-Out Date:</span> {confirmedBooking.checkOut}</p>
        <p><span>Adults:</span> {confirmedBooking.adultNum}</p>
        <p><span>Children:</span> {confirmedBooking.childNum}</p>
    </div>
  )
}

export default BookingConfirmation