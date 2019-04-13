import React, { Component, Fragment } from 'react'

import Header from './components/header'
import Create from './components/create'

import './index.css'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      workouts: []
    }
  }

  pushWorkout = (workout) => {
    this.setState(state => ({ workouts: [workout, ...state.workouts] }))
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="content-container">
          <div className="content">
            <Create pushWorkout={this.pushWorkout} />
          </div>
        </div>
      </Fragment>
    )
  }
}