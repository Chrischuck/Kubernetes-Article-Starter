import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      text: ''
    }
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value })

  onClick = async () => {
    const { text, title } = this.state
    const { pushWorkout } = this.props

    const workout = {
      title,
      text,
      date: new Date()
    }
    
    pushWorkout(workout)
    this.setState({ workout: '', title: '' })
  }

  render() {
    const { workout, title } = this.state
    return (
      <div className="card" style={{ height: '350px'}}>
        <h1>Log a Workout</h1>
        <input
          name="title"
          placeholder="Title"
          value={title}
          style={{width: '100%', height: '20px', fontSize: '16px', margin: '5px 0'}}
          onChange={this.onChange}
        />
        <textarea
          name="text"
          placeholder="Workout notes"
          value={workout}
          style={{width: '100%', height: '150px'}}
          onChange={this.onChange}
        />
        <button className="button" onClick={this.onClick}>Log!</button>
      </div>
    )
  }
}