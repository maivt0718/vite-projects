import React from "react";
import "../../css/header.css"

function Header() {
  return (
    <div className="header_container flex justify-center">
      <div className="w-7/12 title">start bootcamps</div>
      <div className="nav_list">
        <ul className="nav_items">
         
          <a>
            <li className="active">Home</li>
            
          </a>
          <a href="./pages/state.html">
            <li>State</li>
          </a>
          <a>
            <li>Services</li>
          </a>
          <a>
            <li>Contact us</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Header;
