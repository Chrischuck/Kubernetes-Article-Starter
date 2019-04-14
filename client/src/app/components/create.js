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
      textdata: text,
      createdat: new Date().toISOString()
    }
    
    const response = await fetch(`${process.env.API_URI}/create`, {
      method: 'POST',
      body: JSON.stringify(workout)
    })
    .then(res => res.json())
    .catch(console.log)

    if (!response) {
      return
    }

    pushWorkout(response)

    this.setState({ text: '', title: '' })
  }

  render() {
    const { text, title } = this.state
    return (
      <div className="card" style={{ minHeight: '350px'}}>
        <h1>Log a Workout</h1>
        <input
          name="title"
          placeholder="Title"
          value={title}
          style={{width: '100%', height: '20px', fontSize: '17px', margin: '5px 0'}}
          onChange={this.onChange}
        />
        <textarea
          name="text"
          placeholder="Workout notes"
          value={text}
          style={{width: '100%', height: '150px', fontSize: '16px', resize: 'none'}}
          onChange={this.onChange}
        />
        <button className="button" onClick={this.onClick}>Log!</button>
      </div>
    )
  }
}