import React, { Component } from "react";
import { Consumer } from "../../context.js";
import Spinner from "../layouts/Spinner.jsx";
import Track from "./Track.jsx";
import Top from "../../assets/img/topTen.png";
import hot from "../../assets/img/hotTrakcs.png";
import weekly from "../../assets/img/weekly.png";

export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { top_ten, hot_tracks, weekly_tracks } = value;

          return top_ten && top_ten.length > 0 ? (
            <React.Fragment>
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <h1 className="text-center mb-4 text-muted font-monospace">
                      <img
                        src={hot}
                        alt="hot 10 tracks"
                        style={{ width: "50px", height: "50px" }}
                      />
                      Hot Tracks
                    </h1>
                    {hot_tracks.map((track) => {
                      return (
                        <Track key={track.track.track_id} track={track.track} />
                      );
                    })}
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <h1 className="text-center mb-4 text-muted font-monospace">
                      <img
                        src={weekly}
                        alt="weekly tracks"
                        style={{ width: "50px", height: "50px" }}
                      />
                      Weekly Top Tracks
                    </h1>
                    {weekly_tracks.map((track) => {
                      return (
                        <Track key={track.track.track_id} track={track.track} />
                      );
                    })}
                  </div>
                  <div className="col-lg-4">
                    <h1 className="text-center mb-4 text-muted font-monospace">
                      <img
                        src={Top}
                        alt="top 10 tracks"
                        style={{ width: "50px", height: "50px" }}
                      />
                      Top 10 Tracks
                    </h1>
                    {top_ten.map((track) => {
                      return (
                        <Track key={track.track.track_id} track={track.track} />
                      );
                    })}
                  </div>
                </div>
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
