import React, { Component } from 'react'
import {Consumer} from '../../context'

export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value)
          return <h1>{value.track_list && <>{value.track_list.length}</>}</h1>
        }}
      </Consumer>
    )
  }
}
