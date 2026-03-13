import React from 'react'
import './PrimaryNav.css'
import '../../App.css'

const PrimaryNav = () => {
  return (
    <nav className='primary-navbar'>
        <ul className='primary-navlist'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Rooms</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default PrimaryNav