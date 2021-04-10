import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";

const Navbar = (props) => {
  const [state, setState] = useState("true");

  function handleChange() {
    let check = !state;
    setState(check);
    props.changeTheme();
  }

  return (
    <nav className="navbar">
      <Link class="navbar-brand" to="/">
        <img
          src={logo}
          alt="hot 10 tracks"
          style={{ width: "45px", height: "45px" }}
        />{" "}
        Find Lyrics
      </Link>

      <form class="form-inline theme-btn">
        <label
          clsaaName="form-check-label"
          for="flexSwitchCheckDisabled"
          style={{ marginRight: "10px" }}
        >
          Dark theme
        </label>
        <input
          clsaaName="form-check-input"
          type="checkbox"
          id="flexSwitchCheckChecked"
          defaultChecked={state}
          onClick={handleChange}
        />
      </form>
    </nav>
  );
};
export default Navbar;
