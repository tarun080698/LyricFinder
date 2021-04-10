import React, { Component } from "react";
import Spinner from "../layouts/Spinner.jsx";
import { Link } from "react-router-dom";
// import imagenotfound from "../../assets/img/notfound.png";
class Lyrics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trackId: this.props.match.params.id,
      track: {},
      lyrics: {},
      feedback: "",
      type: "form",
      show: true,
    };
  }

  fetchLyrics = () => {
    fetch(
      `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.state.trackId}&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          lyrics: data.message.body.lyrics,
        })
      );
  };

  getTrackinfo = () => {
    fetch(
      `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.state.trackId}&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          track: data.message.body.track,
        })
      );
  };

  provideFeedback = (e) => {
    e.preventDefault();
    fetch(
      `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.feedback.post?track_id=${this.state.trackId}&lyrics_id=${this.state.lyrics.lyrics_id}&feedback=${this.state.feedback}&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.message.header.status_code === 200) {
          this.setState({
            show: true,
            type: "notif",
          });
        }
      });
  };

  componentDidMount() {
    localStorage.setItem("track_id", this.props.match.params.id);
    this.fetchLyrics();
    this.getTrackinfo();
  }

  render() {
    const { track, lyrics } = this.state;
    let date = track
      ? new Date(track.updated_time).toString().substring(0, 21)
      : null;
    return (
      <div>
        {lyrics === undefined ||
        track === undefined ||
        Object.keys(track).length === 0 ||
        Object.keys(lyrics).length === 0 ? (
          <>
            <Spinner />
          </>
        ) : (
          <React.Fragment>
            <Link
              to="/"
              title="back to home"
              class="btn btn-outline-light btn-sm back-btn"
            >
              <i class="fas fa-long-arrow-alt-left"></i>
            </Link>{" "}
            <div className="card shadow-lg lyrics-card">
              {/* {this.state.track.album ? (
                <div className="d-flex justify-content-center">
                  <div
                    className="spinner-grow"
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <div className="d-flex justify-content-center">
                  <span>
                    <img
                      src={imagenotfound}
                      alt="Album Cover not available"
                      style={{ width: "100px", height: "100px" }}
                    />
                    <br />
                    <span>cover iamge not found!</span>
                  </span>
                </div>
              )} */}
              <div className="card-header">
                <div className="card-title">
                  <h3 title="Name and album">
                    <strong>{track.track_name}</strong> from {track.album_name}
                    {"  "}
                    <span
                      className="badge bg-info text-right font-monospace text-uppercase"
                      title="It has curse words or language or art that is sexual, violent, or offensive in nature."
                    >
                      {track.explicit === 1 && <>explicit</>}
                    </span>{" "}
                    <span
                      className="badge rounded-pill bg-success font-monospace"
                      title="Rating"
                    >
                      {track.track_rating && <>{track.track_rating}</>}
                    </span>
                    <span title="Artist"> - by {track.artist_name}</span>
                  </h3>
                </div>
              </div>
              <div className="card-body">
                <h2>Lyrics</h2>
                <div title="lyrics" id="song-lyrics">
                  <blockquote className="blockquote">
                    <p className="1h-base">
                      {lyrics.lyrics_body.substring(
                        0,
                        lyrics.lyrics_body.length - 69
                      )}
                    </p>
                  </blockquote>
                  <br />
                  <figcaption
                    className="blockquote-footer text-end"
                    title="copyright"
                  >
                    {lyrics.lyrics_copyright.substring(0, 33)}
                    <cite title="Source Title"></cite>
                  </figcaption>
                </div>
              </div>
              <div
                className="card-footer text-muted"
                title="last updated lyrics"
              >
                <span>last updated at {date}</span>

                <button
                  type="button"
                  className="btn btn-dark  float-end"
                  title="click to view full lyrics"
                  style={{
                    color: "#ffffff",
                    margin: "0 10px",
                  }}
                >
                  <a
                    href={track.track_share_url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      color: "#ffffff",
                    }}
                  >
                    <u> view full lyrics</u>
                  </a>
                </button>
                <button
                  type="button"
                  className="btn btn-dark  float-end"
                  title="number of people liked"
                >
                  <i className="fas fa-heart text-danger"></i> Likes{"  "}
                  <span className="badge bg-secondary bg-danger">
                    <span>{track.num_favourite}</span>
                  </span>
                </button>
              </div>
            </div>
            {/* feedback form */}
            {this.state.type === "form" ? (
              this.state.show ? (
                <div className="card feedback-card">
                  <div
                    className="card-header"
                    style={{
                      display: "flex",
                    }}
                  >
                    <h5>Send Feedback </h5>
                    <span
                      className="text-muted"
                      style={{
                        marginLeft: "auto",
                      }}
                    >
                      This is an unauthenticated feedback. It has some
                      limitations the feedback.
                    </span>
                  </div>
                  <div className="card-body">
                    <form
                      onSubmit={(e) => {
                        this.setState({ show: true });
                        this.provideFeedback(e);
                      }}
                    >
                      <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">
                          Your Comment
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                          onChange={(e) =>
                            this.setState({
                              feedback: e.target.value,
                            })
                          }
                          placeholder="The feedback to be reported, possible values are: wrong_lyrics, wrong_attribution, bad_characters, lines_too_long, wrong_verses, wrong_formatting"
                        ></textarea>
                      </div>
                      <button
                        className="btn btn-primary w-20 m-2"
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                  <span
                    className="text-muted"
                    style={{
                      alignSelf: "flex-end",
                    }}
                  >
                    Thanks for helping us grow!
                  </span>
                </div>
              ) : (
                <Spinner />
              )
            ) : (
              <div
                className="alert alert-primary w-50 p-2 mx-auto mt-5"
                role="alert"
              >
                Feedback Submitted, Thanks for the feedback!
              </div>
            )}
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Lyrics;
