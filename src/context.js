import React, { Component } from "react";

const Context = React.createContext();
export class Provider extends Component {
  constructor() {
    super();
    this.state = {
      top_ten: [],
      hot_tracks: [],
      weekly_tracks: [],
    };
  }

  topTenTracks = () => {
    fetch(
      `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ind&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        // let list = data.message.body.track_list
        // console.log('main',data.message.body.track_list)
        // list.sort((a, b) => (a.num_favourite - b.num_favourite))
        // console.log(list)
        this.setState({ top_ten: data.message.body.track_list })
      });
  };

  hotTracks = () => {
    fetch(
      `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=hot&page=1&page_size=10&country=ind&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({ hot_tracks: data.message.body.track_list })
      );
  };
  weeklyTracks = () => {
    fetch(
      `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=mxmweekly&page=1&page_size=10&country=ind&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({ weekly_tracks: data.message.body.track_list })
      );
  };

  componentDidMount() {
    this.topTenTracks();
    this.hotTracks();
    this.weeklyTracks();
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
