import React from "react";
import spinner from "../../assets/img/loader.gif";

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        className="rounded m-auto d-block"
        style={{
          width: "100px",
        }}
      />
    </div>
  );
}
