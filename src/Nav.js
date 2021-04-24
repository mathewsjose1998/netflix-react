import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://pngimg.com/uploads/netflix/netflix_PNG26.png"
        alt="logo"
      />

      <img
        className="nav_avatar"
        src="https://toppng.com/uploads/preview/hacker-avatar-11556286068ziooyvonc2.png "
        alt="logo"
      />
    </div>
  );
}

export default Nav;
