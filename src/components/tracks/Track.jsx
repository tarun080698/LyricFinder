import React from "react";
import { Link } from "react-router-dom";

export default function Track(props) {
  const { track } = props;

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
