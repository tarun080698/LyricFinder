import React from "react";
import { Link } from "react-router-dom";

export default function Track(props) {
  const { track } = props;

  //   function findRating(fav) {
  //     let tag = <></>;

  //     if (fav <= 1000) {
  //       tag = (
  //         <span role="button" className="btn btn-light  float-end">
  //           <i className="fas fa-heart"></i> Likes{"  "}
  //           <span className="badge bg-secondary bg-dark">{fav}</span>
  //         </span>
  //       );
  //     } else if (1000 < fav <= 2000) {
  //       tag = (
  //         <span role="button" className="btn btn-primary float-end">
  //           <i className="fas fa-heart"></i> Likes{"  "}
  //           <span className="badge bg-secondary bg-dark">{fav}</span>
  //         </span>
  //       );
  //     } else if (2000 < fav <= 3000) {
  //       tag = (
  //         <span role="button" className="btn btn-success  float-end">
  //           <i className="fas fa-heart"></i> Likes{"  "}
  //           <span className="badge bg-secondary bg-dark">{fav}</span>
  //         </span>
  //       );
  //     } else if (3000 < fav <= 5000) {
  //       tag = (
  //         <span role="button" className="btn btn-info  float-end">
  //           <i className="fas fa-heart"></i> Likes{"  "}
  //           <span className="badge bg-secondary bg-dark">{fav}</span>
  //         </span>
  //       );
  //     } else if (5000 < fav <= 6000) {
  //       tag = (
  //         <span role="button" className="btn btn-info  float-end">
  //           <i className="fas fa-heart"></i> Likes{"  "}
  //           <span className="badge bg-secondary bg-info">{fav}</span>
  //         </span>
  //       );
  //     } else if (6000 < fav <= 8000) {
  //       tag = (
  //         <span role="button" className="btn btn-warning  float-end">
  //           <i className="fas fa-heart"></i> Likes{"  "}
  //           <span className="badge bg-secondary bg-dark">{fav}</span>
  //         </span>
  //       );
  //     } else if (fav > 10000) {
  //       tag = (
  //         <span role="button" className="btn btn-danger  float-end">
  //           <i className="fas fa-heart"></i> Likes{"  "}
  //           <span className="badge bg-secondary bg-dark">{fav}</span>
  //         </span>
  //       );
  //     }
  //     return tag;
  //   }

  return (
    <div className="col-md-6">
      <div className="card shadow-lg mb-4 p-2">
        <h5>{track.artist_name}</h5>
        <p className="card-text">
          <strong>
            {" "}
            <i className="fas fa-play"></i> Track: {track.track_name}
          </strong>{" "}
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
          </span>{" "}
          <span className="badge bg-info text-right font-monospace text-uppercase">
            {track.instrumental === 1 && <>instrumental</>}
          </span>
          <br />
          <strong>
            {" "}
            <i className="fas fa-compact-disc"></i> Album: {track.album_name}
          </strong>
        </p>

        <div className="card-footer text-muted">
          <Link
            to={`lyric/track/${track.track_id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-signature text-warning"></i> view lyrics
          </Link>
          <span
            role="button"
            className="btn btn-dark  float-end"
            title="number of people liked"
          >
            <i className="fas fa-heart text-danger"></i> Likes{"  "}
            <span className="badge bg-light text-dark">
              {track.num_favourite}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
