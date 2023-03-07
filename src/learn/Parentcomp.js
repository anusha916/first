import React,{PureComponent} from 'react';
import Regcomp from './Regcomp';
import Purecomp from './Purecomp';
class Parentcomp extends PureComponent{
    constructor(props){
        super(props)
        this.state={
            name:"anusha"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"anusha"
            })
        },2000)
    }
    render(){
        console.log("Parentcomp rendering");
        return(
            <div>
            parentcomp
            <Regcomp name={this.state.name}/>
            <Purecomp name={this.state.name}/>
            </div>
        )
        
    }
}
export default Parentcomp