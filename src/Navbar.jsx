import React from "react";

const Navbar = ({ showPlus, onPlusClick }) => {
  return (
    <div className="DashNav">
      <div className="fnav">
        <a>
          LO<span>DEX</span>
        </a>
        <div className="search">
          <input placeholder="search or type"></input>
          <i className="ri-search-line"></i>
        </div>
      </div>
      <div className="snav">
        <i className="ri-notification-line"></i>
        {showPlus && (
          <span className="plus-sign" onClick={onPlusClick}>
            +
          </span>
        )}
        <p>profile</p>
      </div>
    </div>
  );
};

export default Navbar;
