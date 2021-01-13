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

          return track_list && track_list.length > 0 ? (
            <React.Fragment>
              <nav>
                <div class="nav nav-tabs mb-5" id="nav-tab" role="tablist">
                  <a
                    class="nav-item nav-link active"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#top-10-tracks"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    <h3>{heading}</h3>
                  </a>
                  {/* <a
                    class="nav-item nav-link"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Profile
                  </a>
                  <a
                    class="nav-item nav-link"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    Contact
                  </a> */}
                  <a
                    class="nav-item nav-link"
                    id="search"
                    data-toggle="tab"
                    href="#search-lyrics"
                    role="tab"
                    aria-controls="searcht"
                    aria-selected="false"
                  >
                    Search
                  </a>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <h1 className="text-center mb-4">{heading}</h1>
                  <div className="row">
                    {track_list.map((track) => {
                      return (
                        <Track key={track.track.track_id} track={track.track} />
                      );
                    })}
                  </div>
                  <li class="divider" style={{'border-top': '3px solid #bbb'}} ></li>                </div>
                {/* <div
                  class="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  hello
                </div>
                <div
                  class="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  byee
                </div> */}
                <div
                  class="tab-pane fade"
                  id="search"
                  role="tabpanel"
                  aria-labelledby="search"
                >
                  byee
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
