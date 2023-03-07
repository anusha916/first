import React,{Component} from 'react';
class Hello extends Component{
    render()
    {
         return <h1>hello {this.props.name}</h1>
        
    }
}
/*const Hello=(props)=>{
    return <h1>hello {props.name}</h1>
}*/
export default Hello