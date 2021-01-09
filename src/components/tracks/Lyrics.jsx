import React, { Component } from "react";

class Lyrics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      track: {},
      lyrics: "",
    };
  }

  componentDidMount() {
    fetch(
      `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then((response) => response.json())
      .then(
        (data) => 
              this.setState({ track: data.message.body.lyrics, lyrics: data.message.body.lyrics })
      );
  }
  render() {
      return <div>
        {this.state.lyrics && <>{this.state.lyrics.lyrics_body}</> }
    </div>;
  }
}

export default Lyrics;
