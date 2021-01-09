import React from "react";
import spinner from "./spinner.gif";

export default function Spinner() {
  return (
    <div>
      <img src={spinner} alt="Loading..." className="rounded mx-auto d-block" />
    </div>
  );
}
