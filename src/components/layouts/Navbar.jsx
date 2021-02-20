import React from "react";
import logo from "../../assets/img/logo.png";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand h1 mx-auto">
        <img
          src={logo}
          alt="hot 10 tracks"
          style={{ width: "45px", height: "45px" }}
        />{" "}
        <span className="heading text-capitalize font-monospace text-light text-center text-large">
          Find Lyrics
        </span>
      </div>
      <button
        type="button"
        class="btn float-right"
        onClick={props.changeTheme}
        style={{
          marginRight: "20px",
        }}
      >
        Toggle Theme
      </button>
    </nav>
  );
};
export default Navbar;
