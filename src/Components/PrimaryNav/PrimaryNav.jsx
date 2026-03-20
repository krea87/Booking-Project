import React from "react";
import "./PrimaryNav.css";
import "../../App.css";

const PrimaryNav = () => {
  return (
    <nav className="primary-navbar">
      <ul className="primary-navlist">
        <li>
          <a href="#booking">Booking</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            href="https://maps.app.goo.gl/BXbysk5wPCLjYafbA"
            target="_blank"
            rel="noopener noreferer"
          >
            Our location
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default PrimaryNav;
