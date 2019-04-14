import React, { Component } from 'react'

export default ({ title, createdat, textdata, deleteWorkout, id }) => (
  <div className="card" style={{position: 'relative'}}>
    <p className="delete-x" onClick={() => deleteWorkout(id)}>x</p>
    <h1>{title}</h1>
    <p>{textdata}</p>
  </div>
)