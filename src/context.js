import React, { Component } from "react";

const Context = React.createContext();
const url = `https://cors-access-allow.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=5&country=it&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`;

export class Provider extends Component {
  constructor() {
    super();
    this.state = {
      track_list: [
        { track: { track_name: "abc" } },
        { track: { track_name: "def" } },
      ],
      heading: "Top 10 Tracks",
    };
  }

  componentDidMount() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => console.log("This is your data", data));
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
