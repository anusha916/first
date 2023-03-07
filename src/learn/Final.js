import React,{Component} from 'react';
class Final extends Component{
    constructor(){
        super()
    this.state={
        message:"hello"
    }
}
clickhandler(){
    this.setState({
        message:"Thankyou"
    })
}
    render()
    {
        return(
       <div>
      <h1>{this.state.message}</h1>
      <button onClick={this.clickhandler.bind(this)}>clickme</button>
      <button onClick={()=>this.clickhandler()}>click me</button>
      </div>
        )

    }
}

export default Final