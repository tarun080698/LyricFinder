import React from 'react'
import { Link } from 'react-router-dom'

export default function Track(props) {

    const {track} = props
    return (
        <div className="col-md-6">
            <div className="card mb-4 p-3 shadow-sm">
                <h5>
                    {track.artist_name}
                </h5>
                <p className="card-text">
                    <strong> <i className="fas fa-play"></i> Track: {track.track_name}</strong>
                    <br />
                    <strong> <i className="fas fa-compact-disc"></i> Album: {track.album_name}</strong>
                </p>
                <Link to={`lyric/track/${track.track_id}`} className="btn btn-dark btn-block">
                <i className="fas fa-signature"></i> view lyrics
                </Link>
            </div>
        </div>
    )
}
