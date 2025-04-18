import React from 'react';
import '../App.css';

function Hadtop() {
  return (
    <>
      <div className="row Hadtop p-2 align-items-center">
        {/* Content on larger screens */}
        <div className="col-lg-10 col-md-8 col-sm-12 ps-3 text-center text-md-start">
          <span className="text-muted">
            Super Value Deals - Save more with coupons
          </span>
        </div>

        {/* Flag and Dropdown */}
        <div className="col-lg-2 col-md-4 col-sm-12 text-center text-md-end">
          <img
            src="/in.svg"
            alt="path"
            className="img-fluid me-2"
            height={20}
            width={20}
          />
          <select className="contdrop text-muted">
            <option value="English">English</option>
            <option value="Hindi" selected>Hindi</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default Hadtop;
