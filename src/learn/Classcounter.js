import React, { Component } from 'react'

class Classcounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    incrementcount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
}
    
  render() {
    return (
      <div>
        <button onClick={this.incrementcount}>clicked {this.state.count} times</button>
      </div>
    )
  }
}

export default Classcounter
