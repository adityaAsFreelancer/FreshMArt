import React from 'react';
import { IoLocationOutline } from "react-icons/io5";
import '../App.css'; // Ensure your CSS contains any required custom styles

function Navserch() {
  return (
    <div className="row Navserch py-3 px-2 align-items-center">
      {/* Logo Section */}
      <div className="col-lg-2 col-md-3 col-sm-6 text-center text-md-start">
        <img src="/freshcart-logo.svg" alt="FreshCart Logo" className="img-fluid" />
      </div>

      {/* Search Bar Section */}
      <div className="col-lg-4 col-md-6 col-sm-12 mt-2 mt-md-0">
        <div className="d-flex justify-content-center">
          <div className="input-group" style={{ maxWidth: '400px' }}>
            <input
              type="text"
              className="form-control shadow-sm"
              placeholder="Search for Products"
              aria-label="Search"
              aria-describedby="basic-addon1"
              style={{ fontSize: '13px' }}
            />
          </div>
        </div>
      </div>

      {/* Location Button Section */}
      <div className="col-lg-2 col-md-3 col-sm-6 text-center mt-2 mt-md-0">
        <button className="btn btn-outline-secondary px-3 text-muted">
          <IoLocationOutline /> Location
        </button>
      </div>

      {/* Icons Section */}
      <div className="col-lg-4 col-md-12 col-sm-12 text-center mt-3 mt-lg-0">
        <img src="/heart3.svg" alt="Favorites" className="me-2" />
        <sup className="bg-success text-light rounded-5 p-1 px-2">5</sup>
        <img src="/user.svg" alt="User" className="ms-3" />
        <img src="/cartbag.svg" alt="Cart" className="ms-3" />
        <sup className="bg-success text-light rounded-5 p-1 px-2">0</sup>
      </div>
    </div>
  );
}

export default Navserch;
