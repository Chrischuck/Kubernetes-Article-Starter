import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <div className="card" style={{ height: '320px'}}>
        <h1>Log a Workout</h1>
        <textarea style={{width: '100%', height: '150px'}} />
        <button className="button">Log!</button>
      </div>
    )
  }
}