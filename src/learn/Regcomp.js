import React,{Component} from 'react'
class Regcomp extends Component{
    render(){
        console.log("regcomp rendering");
        return(
            <div>
             Regcomp {this.props.name}
            </div>
        )
    }
}
export default Regcomp