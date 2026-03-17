import React from 'react'
import './PrimaryNav.css'
import '../../App.css'

const PrimaryNav = () => {
  return (
    <nav className='primary-navbar'>
        <ul className='primary-navlist'>
            <li><a href="#">Home</a></li>
            <li><a href="#rooms">Rooms</a></li>
            <li><a href="#booking">Booking</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default PrimaryNav