import React from "react";
import { useState } from "react";
import logo from "../../assets/img/logo.png";

const Navbar = (props) => {
  const [state, setState] = useState("true");

  function handleChange() {
    let check = !state
    setState(check);
    props.changeTheme();
  }
  return (
    <nav className="navbar">
      <div className="navbar-brand h1 mx-auto">
        <img
          src={logo}
          alt="hot 10 tracks"
          style={{ width: "45px", height: "45px" }}
        />{" "}
        <span className="heading text-capitalize font-monospace text-center text-large">
          Find Lyrics
        </span>
      </div>
      <label
        clsaaName="form-check-label float-right"
        for="flexSwitchCheckDisabled"
        style={{
          marginRight: "10px",
        }}
      >
        Light theme
      </label>
      <input
        // clsaaName="btn float-right"
        clsaaName="form-check-input float-right"
        type="checkbox"
        id="flexSwitchCheckChecked"
        // checked
        defaultChecked={state}
        onClick={handleChange}
        style={{
          marginRight: "20px",
        }}
      />
      {/* <button
        type="button"
        clsaaName="btn float-right"
        onClick={props.changeTheme}
        style={{
          marginRight: "20px",
        }}
      >
        Toggle Theme
      </button> */}
    </nav>
  );
};
export default Navbar;
