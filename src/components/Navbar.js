// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure this is linked

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Solar Car Team</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/team">Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sponsors">Sponsors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/past-cars">Past Cars</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/telemetry">Telemetry</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
