import React from "react";
// import spinner from "./spinner.gif";
// import spinner from "./spinner.gif";
import spinner from "./loading.gif";

export default function Spinner() {
  return (
    <div>
      <img src={spinner} alt="Loading..." className="rounded mx-auto d-block" />
    </div>
  );
}
