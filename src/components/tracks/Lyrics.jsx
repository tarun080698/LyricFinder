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
            <Link to="/" className="btn btn-dark btn-sm mb-4">
              <i class="fas fa-chevron-circle-left"></i> Go
            </Link>{" "}
            <div class="card ">
              {this.state.track ? (
                <span>
                  <i className="card-img-top fas fa-image mx-auto"></i>
                  Album Cover not available
                </span>
              ) : (
                <div class="d-flex justify-content-center">
                  <div
                    class="spinner-grow"
                    style={{ width: "3rem", height: "3rem" }}
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              )}
              <div class="card-header">
                <h5 class="card-title text-center" title="Name and album">
                  {track.track_name} - {track.album_name}
                </h5>
              </div>
              <div class="card-body">
                <p class="card-text" title="Artist">
                  {track.artist_name}{" "}
                </p>
                <h1 class="display-6">Lyrics</h1>
                <figure title="lyrics">
                  <blockquote class="blockquote">
                    <p>
                      {lyrics.lyrics_body.substring(
                        0,
                        lyrics.lyrics_body.length - 69
                      )}
                    </p>
                  </blockquote>
                  <br />
                  <figcaption class="blockquote-footer" title="copyright">
                    {lyrics.lyrics_copyright.substring(0, 33)}
                    <cite title="Source Title"></cite>
                  </figcaption>
                </figure>

                <span role="button" title="click to view full lyrics">
                  <a
                    href={track.track_share_url}
                    class="btn bg-light text-dark"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <u> view full lyrics</u>
                  </a>
                </span>
              </div>
              <div class="card-footer text-muted" title="last updated lyrics">
                <span>last updated at {date}</span>
                <button
                  type="button"
                  class="btn btn-primary  float-end"
                  title="number of people liked"
                >
                  <i class="fas fa-heart"></i> Likes{"  "}
                  <span class="badge bg-secondary bg-danger">
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

//<img src='https://s.mxmcdn.net/images-storage/albums5/4/4/3/7/9/6/50697344_350_350.jpg' class="card-img-top center mx-auto" alt="album cover" style={{ width: '400px', height: '400px' }} />


