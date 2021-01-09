import React, { Component } from "react";

const Context = React.createContext();
const url = `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=ind&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`;

export class Provider extends Component {
  constructor() {
    super();
    this.state = {
      track_list: [],
      heading: "Top 10 Tracks",
    };
  }

  componentDidMount() {
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        this.setState({ track_list: data.message.body.track_list })
      );
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
