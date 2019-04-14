import React, { Component } from 'react'

export default ({ title, createdat, textdata }) => (
  <div className="card" >
    <h1>{title}</h1>
    <p>{textdata}</p>
  </div>
)