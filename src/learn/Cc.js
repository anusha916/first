import React, { Component } from 'react'

export default class Cc extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrmentcount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    
  render() {
    return (
      <div>
        <button onClick={this.incrementcount}>clicked {this.state.count} times</button>
      </div>
    )
  }
}
