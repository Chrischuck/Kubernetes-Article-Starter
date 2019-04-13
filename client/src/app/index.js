import React, { Component, Fragment } from 'react'

import Header from './components/header'
import Create from './components/create'

import './index.css'

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="content-container">
          <div className="content">
            <Create />
          </div>
        </div>
      </Fragment>
    )
  }
}