import React, { Component } from "react";
import Spinner from "../layouts/Spinner.jsx";
// import img from "../layouts/spinner.gif";
import { Link } from "react-router-dom";
class Lyrics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      track: {},
      lyrics: {},
    };
  }

  componentDidMount() {
    console.log(this.props)
    fetch(
      `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          lyrics: data.message.body.lyrics,
        })
      );
    fetch(
      `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState(
          {
            track: data.message.body.track,
          },
          () => {
            fetch(
              `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/album.tracks.get?album_id=${this.state.track.album_id}&apikey=${process.env.REACT_APP_MM_KEY}`
            )
              .then((response) => response.json())
              .then((data) => console.log(data));
          }
        )
    );
    console.log(this.state)
  }

  render() {
    const { track, lyrics } = this.state;
    let date = new Date(track.updated_time);
    date = date.toString().substring(0, 21);
    return (
      <div>
        {lyrics === undefined ||
        track === undefined ||
        Object.keys(track).length === 0 ||
        Object.keys(lyrics).length === 0 ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <Link
              to="/"
              className="btn btn-dark text-light btn-lg mb-4 ml-3 mr-3"
              title="back to home"
            >
              <i className="fas fa-chevron-circle-left"></i>
            </Link>{" "}
            <div className="card shadow-lg p-4">
              {this.state.track ? (
                <span>
                  <i className="card-img-top fas fa-image mx-auto"></i>
                  Album Cover not available
                </span>
              ) : (
                <div className="d-flex justify-content-center">
                  <div
                    className="spinner-grow"
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                  >
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
              <div className="card-header">
                <div className="card-title text-left">
                  <h5 title="Name and album">
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
                  </h5>
                </div>
              </div>
              <div className="card-body">
                <p
                  className="card-text bg-light text-xl-dark p-2 w-auto border-bottom"
                  title="Artist"
                >
                  - by {track.artist_name}{" "}
                </p>
                <h1 className="display-6">Lyrics</h1>
                <figure title="lyrics">
                  <blockquote className="blockquote border p-3">
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
                </figure>

                <span role="button" title="click to view full lyrics">
                  <a
                    href={track.track_share_url}
                    className="btn btn-link text-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <u> view full lyrics</u>
                  </a>
                </span>
              </div>
              <div
                className="card-footer text-muted"
                title="last updated lyrics"
              >
                <span>last updated at {date}</span>
                <button
                  type="button"
                  className="btn btn-dark  float-end"
                  title="number of people liked"
                >
                  <i className="fas fa-heart"></i> Likes{"  "}
                  <span className="badge bg-secondary bg-danger">
                    <span>{track.num_favourite}</span>
                  </span>
                </button>
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Lyrics;

//<img src='https://s.mxmcdn.net/images-storage/albums5/4/4/3/7/9/6/50697344_350_350.jpg' className="card-img-top center mx-auto" alt="album cover" style={{ width: '400px', height: '400px' }} />
