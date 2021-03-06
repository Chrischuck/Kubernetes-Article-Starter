import React, { Component, Fragment } from 'react'

import Header from './components/header'
import Create from './components/create'
import Card from './components/card'

import './index.css'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      workouts: []
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const data = await fetch(`${process.env.API_URI}/read`)
      .then(res => res.json())

    const sortedData = data.sort((a, b) => {
      return new Date(b.createdat).getTime() - new Date(a.createdat).getTime()
    })
    
    this.setState({ workouts: sortedData })
  }

  pushWorkout = (workout) => {
    this.setState(state => ({ workouts: [workout, ...state.workouts] }))
  }

  deleteWorkout = async (id) => {

    const data = await fetch(`${process.env.API_URI}/delete?id=${id}`, { method: 'POST' })
      .then(res => res.json())

    if (!data) {
      return
    }

    this.setState(state => ({ workouts: state.workouts.filter(workout => workout.id !== id) }))    
  }

  render() {
    const { workouts } = this.state
    return (
      <Fragment>
        <Header />
        <div className="content-container">
          <div className="content">
            <Create pushWorkout={this.pushWorkout} />
            {
              workouts.map((workout) => (
                <Card
                  key={workout.id + '-' + workout.createdat}
                  deleteWorkout={this.deleteWorkout}
                  {...workout}
                />
              ))
            }
          </div>
        </div>
      </Fragment>
    )
  }
}