import React,{Component} from 'react'
/*function Functionclick(){
    function clickhandler()
    {
        console.log("Button clicked");
    }
    return(<button onClick={clickhandler}>Click me</button>)
}*/
class Functionclick extends Component{
    clickhandler(){
        console.log("Button clicked")
    }

    render()
    {
      return <button onClick={this.clickhandler}>Click me</button>
    }

}

export default Functionclick