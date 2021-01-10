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
      size: -1,
      show: false,
      searchedFor: "",
    };
  }

  findTrack = (e) => {
    e.preventDefault();
    this.setState({
      searchedFor: this.state.searchValue,
    });
    fetch(
      `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q=${this.state.searchValue}&f_has_lyrics=1&f_lyrics_language=en&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        result =
          data.message.body.track_list.length > 0 ? (
            data.message.body.track_list.map((item) => {
              return <Track track={item.track} key={item.track.track_id} />;
            })
          ) : (
            <div class="alert alert-primary w-50 p-3 mx-auto" role="alert">
              Nothing Found, Try again with something different!
              {/* <button
                type="button"
                class="btn-close btn-close-dark float-right"
                aria-label="Close"
                onClick={() => {
                  result = null;
                }}
              ></button> */}
            </div>
          );
        this.setState({
          size: data.message.body.track_list.length,
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
            <div>
              <div className="card card-body text-center mb-5 p-4">
                <h5 className="card-title display-3 text-capitalize">
                  <i className="fas fa-music"></i>
                  {"  "}Search for a song lyrics
                </h5>
                <p className="card-text text-muted text-capitalize display-6">
                  Get lyrics for any song
                </p>
                <form
                  onSubmit={(e) => {
                    this.setState({
                      show: true,
                    });
                    this.findTrack(e);
                  }}
                >
                  <div className="form-group form-floating">
                    <input
                      type="search"
                      className="form-control form-control-lg mb-3"
                      placeholder="search any by word in the Lyrics, Name or Artist"
                      name="searchValue"
                      value={this.state.searchValue}
                      onChange={(e) => this.onChange(e)}
                      required
                      autoComplete="off"
                    />
                    <label htmlFor="floatingInput">
                      search any by word in the Lyrics, Name or Artist
                    </label>
                  </div>
                  <button
                    className="btn btn-primary w-50 d-grid mx-auto"
                    type="submit"
                  >
                    Find Lyrics
                  </button>
                </form>
              </div>
              <div className="center mb-4">
                {result !== null && (
                  <div className="center mb-4">
                    {this.state.size > 0 && (
                      <h1 class="display-6">
                        Search results for "
                        <strong>{this.state.searchedFor}</strong>" are :{" "}
                      </h1>
                    )}
                    <br />

                    {result}
                  </div>
                )}
                {this.state.show && <Spinner />}
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
