import React, { Component } from 'react'

export default class Withcounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        count:0
    }
    }
    incrementcount=()=>{
        this.setState(prevState=>{
            return {count:prevState.count+1}

        })

     }
    
  render() {
    return (
      <div>
        const {count}=this.state
        <button onClick={this.incrementcount}>clicked {count} times</button>
      </div>
    )
  }
}

