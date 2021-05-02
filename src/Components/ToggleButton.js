import { Component } from 'react'
import React from 'react'
import './Toggle.css'

export class ToggleButton extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { selected, toggleSelected } = this.props
    return (
      <div className='toggle-container' onClick={toggleSelected}>
        <div className={`dialog-button`}>{selected ? 'YES' : 'NO'}</div>
      </div>
    )
  }
}
