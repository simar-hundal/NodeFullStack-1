# NodeFullStack

Last Example

        import React, { Component } from 'react'

        export default class ButtonNew extends React.Component {
          constructor(props) {
            super(props)
            this.state = { clicked: false }
          }
          render() {
            return (
              <button
                onClick={() => {
                  {
                    this.setState((state) => ({ clicked: !state.clicked }))
                    //this.state.clicked = !this.state.clicked

                    console.log('State', this.state.clicked)
                  }
                }}
              >
                CLicke me {this.state.clicked ? 'True' : 'false'}
              </button>
            )
          }
        }

