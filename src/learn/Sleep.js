import React,{Component} from 'react';
class Sleep extends Component{
    constructor()
    {
        super()
        this.state={
            message:"please click the button"
        }
    }
        changemessage()
        {
            this.setState({
            message:"congratulations, you owe me an icecream"
            })
        }
        render()
        {
            return(
            <div>
            <center>
            <h1>{this.state.message}</h1>
            <button onClick={()=>this.changemessage()}>tap tap</button>
            </center>
            </div>
            );
        }
    }

export default Sleep
