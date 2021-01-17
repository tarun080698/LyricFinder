import React from "react";
import logo from "../../assets/img/logo.png";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <span className="navbar-brand h1 mx-auto">
        <img
          src={logo}
          alt="hot 10 tracks"
          style={{ width: "45px", height: "45px" }}
        />{" "}
        <span className="heading text-capitalize font-monospace text-light text-center text-large">
          Find Lyrics
          <button type="button" class="btn" onClick={props.changeTheme}>Toggle Theme</button>
        </span>
      </span>
    </nav>
  );
};
export default Navbar;
