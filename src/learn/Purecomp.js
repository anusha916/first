import React,{PureComponent} from 'react'
class Purecomp extends PureComponent{
    render(){
        console.log("purecomp rendering");
        return(
            <div>
             Purecomp {this.props.name}
            </div>
        )
    }
}
export default Purecomp
