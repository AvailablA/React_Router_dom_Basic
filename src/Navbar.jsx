import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import './index.css';

const Navbar = () => {
  return (
    <>
      <div className="menu">
        <Link to="/">About US</Link>
        <Link to="/contact">Contact US</Link>
        <Link to="/service">Service</Link>
      </div>
    </>
  );
};


export default Navbar;
