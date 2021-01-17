import React from "react";
import logo from "../../assets/img/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top navbar-dark bg-dark mb-5 ">
      <span className="navbar-brand mb-0 h1 mx-auto">
        <img
          src={logo}
          alt="hot 10 tracks"
          style={{ width: "45px", height: "45px" }}
        />{" "}
        <span className="text-capitalize font-weight-bolder font-monospace text-light text-large">
          Find Lyrics
        </span>
      </span>
    </nav>
  );
};
export default Navbar;
