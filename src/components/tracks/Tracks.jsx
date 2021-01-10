import React, { Component } from "react";
import { Consumer } from "../../context.js";
import Spinner from "../layouts/Spinner.jsx";
import Track from "./Track.jsx";

export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { track_list, heading } = value;
          console.log(value)
          return track_list && track_list.length > 0 ? (
            <React.Fragment>
              <h3 className="text-center mb-5">{heading}</h3>
              <div className="row">
                {track_list.map((track) => {
                  return (
                    <Track key={track.track.track_id} track={track.track} />
                  );
                })}
              </div>
            </React.Fragment>
          ) : (
            <Spinner />
          );
        }}
      </Consumer>
    );
  }
}
