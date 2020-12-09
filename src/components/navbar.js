import React from "react";
import "../styles/navbar.css";
import Bell from "../assets/icons/bell.svg";
import ProfileFace from "../assets/icons/profile.svg";

const Mynavbar = () => {
  return (
    <>
      <div className="navbar_top1">
        <div class="leftnav">
          <form id="search-form">
            <div class="search">
              <input
                type="text"
                name="search"
                class="round"
                placeholder="&#xf002; Search"
              />
            </div>
          </form>
        </div>
        <div className="rightnav">
          <div className="bell">
            <img src={Bell} className="Bell-Icon" alt="Icon" />
            <span class="badge">9</span>
          </div>
          <div className="profile_face">
            <img src={ProfileFace} className="profile" alt="Icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mynavbar;
