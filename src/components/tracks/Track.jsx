import React from "react";
import { Link } from "react-router-dom";

export default function Track(props) {
  const { track } = props;

  //   function findRating(fav) {
  //     let tag = <></>;

  //     if (fav <= 1000) {
  //       tag = (
  //         <span role="button" class="btn btn-light  float-end">
  //           <i class="fas fa-heart"></i> Likes{"  "}
  //           <span class="badge bg-secondary bg-dark">{fav}</span>
  //         </span>
  //       );
  //     } else if (1000 < fav <= 2000) {
  //       tag = (
  //         <span role="button" class="btn btn-primary float-end">
  //           <i class="fas fa-heart"></i> Likes{"  "}
  //           <span class="badge bg-secondary bg-dark">{fav}</span>
  //         </span>
  //       );
  //     } else if (2000 < fav <= 3000) {
  //       tag = (
  //         <span role="button" class="btn btn-success  float-end">
  //           <i class="fas fa-heart"></i> Likes{"  "}
  //           <span class="badge bg-secondary bg-dark">{fav}</span>
  //         </span>
  //       );
  //     } else if (3000 < fav <= 5000) {
  //       tag = (
  //         <span role="button" class="btn btn-info  float-end">
  //           <i class="fas fa-heart"></i> Likes{"  "}
  //           <span class="badge bg-secondary bg-dark">{fav}</span>
  //         </span>
  //       );
  //     } else if (5000 < fav <= 6000) {
  //       tag = (
  //         <span role="button" class="btn btn-info  float-end">
  //           <i class="fas fa-heart"></i> Likes{"  "}
  //           <span class="badge bg-secondary bg-info">{fav}</span>
  //         </span>
  //       );
  //     } else if (6000 < fav <= 8000) {
  //       tag = (
  //         <span role="button" class="btn btn-warning  float-end">
  //           <i class="fas fa-heart"></i> Likes{"  "}
  //           <span class="badge bg-secondary bg-dark">{fav}</span>
  //         </span>
  //       );
  //     } else if (fav > 10000) {
  //       tag = (
  //         <span role="button" class="btn btn-danger  float-end">
  //           <i class="fas fa-heart"></i> Likes{"  "}
  //           <span class="badge bg-secondary bg-dark">{fav}</span>
  //         </span>
  //       );
  //     }
  //     return tag;
  //   }

  return (
    <div className="col-md-6">
      <div className="card mb-4 p-3 shadow-sm">
        <h5>{track.artist_name}</h5>
        <p className="card-text">
          <strong>
            {" "}
            <i className="fas fa-play"></i> Track: {track.track_name}
          </strong>
          <br />
          <strong>
            {" "}
            <i className="fas fa-compact-disc"></i> Album: {track.album_name}
          </strong>
        </p>

        <div class="card-footer text-muted">
          <Link
            to={`lyric/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-signature"></i> view lyrics
          </Link>
          <span
            role="button"
            class="btn btn-dark  float-end"
            title="number of people liked"
          >
            <i class="fas fa-heart"></i> Likes{"  "}
            <span class="badge bg-light text-dark">{track.num_favourite}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
