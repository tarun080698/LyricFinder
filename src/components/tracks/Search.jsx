import React, { Component } from "react";
import { Consumer } from "../../context";
import Spinner from "../layouts/Spinner";
import Track from "../tracks/Track";

var result = null;

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      show: false,
      searchedFor: "",

    };
  }

  findTrack = (e) => {
    e.preventDefault();
    this.setState({
      searchedFor: this.state.searchValue,
      search_tracks: [],
    });
    fetch(
      `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track_artist=${this.state.searchValue}&f_has_lyrics=1&f_lyrics_language=en&s_track_rating=desc&s_artist_rating=desc&page_size=5&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          search_tracks: data.message.body.track_list,
        });
        result =
          this.state.search_tracks.length > 0 ? (
            <React.Fragment>
              <h1 className="display-6 input-clr text-center mb-5">
                Search results for "<strong>{this.state.searchedFor}</strong>"
                are :{" "}
              </h1>
              <div className="row mx-2">
                {this.state.search_tracks.map((item) => {
                  return <Track track={item.track} key={item.track.track_id} />;
                })}
              </div>
            </React.Fragment>
          ) : (
            <div className="alert alert-primary w-50 p-3 mx-auto" role="alert">
              Nothing Found, Try again with something different!
              {/* <button
                type="button"
                className="btn-close btn-close-dark float-right"
                aria-label="Close"
                onClick={() => {
                  result = null;
                }}
              ></button> */}
            </div>
          );
        this.setState({
          size: this.state.search_tracks.length,
        });
        this.setState({
          show: false,
        });
      });
  };

  onChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    });
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          return (
            <div className="row">
              <div className="card card-body search text-center">
                <h4
                  className="card-title text-capitalize"
                  style={{ alignSelf: "center" }}
                >
                  <i className="fas fa-music"></i>
                  &nbsp; Search for a song lyrics
                </h4>
                <h5 className="card-text text-muted text-capitalize">
                  Get lyrics for any song
                </h5>
                <form
                  onSubmit={(e) => {
                    this.setState({
                      show: true,
                    });
                    this.findTrack(e);
                  }}
                >
                  <div className="form-group form-floating input-clr">
                    <input
                      type="search"
                      className="form-control form-control-lg mb-3"
                      placeholder='{<i className="fas fa-search"></i>}search by Track Title or Artist Name'
                      name="searchValue"
                      value={this.state.searchValue}
                      onChange={(e) => this.onChange(e)}
                      required
                      autoComplete="off"
                    />
                    <label htmlFor="floatingInput">
                      <i className="fas fa-search"></i> Search by Track Title or
                      Artist Name
                    </label>
                  </div>
                  <button
                    className="btn btn-primary w-50 d-inline mx-auto"
                    type="submit"
                  >
                    Find Lyrics
                  </button>
                  {false && (
                    <button
                      className="btn btn-primary w-10 d-inline ml-2"
                      type="submit"
                    >
                      <i className="fas fa-microphone"></i>
                    </button>
                  )}
                </form>
              </div>
              <div className="center mb-4">
                {result !== null && <div className="center mb-4">{result}</div>}
                {this.state.show && <Spinner />}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
