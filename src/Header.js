import React from 'react';
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <img src="/images/atmiyalogo.png" alt="Header Image" className="header-image" />
        <div className="header-text">
          <h1 className="main-head">ATMIYA UNIVERSITY</h1>
          <hr/>
          <h2 className="sub-heading">Yogidham Gurukul, Kalavad Road,Rajkot - 360 005.Gujrat (India)</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;