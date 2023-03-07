import React,{Component} from 'react';
class Message extends Component{
    constructor(){
        super()
        this.state={
            message:"Hello"
        }
    }
    changemessage()
    {
        this.setState({
            message:"thankyou for subscribing"
        }
        )
    }
    render()
    {
        return(
            <div>
                <center>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changemessage()}>subscribe</button>
                </center>
            </div>
        );
    }
}
export default Message