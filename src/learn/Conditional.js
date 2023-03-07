import React,{Component} from 'react'
class Conditional extends Component{
    constructor(props){
        super(props)
        this.state={
            message:true
        }
    }
    render()
    {
      if(this.state.message===true)
      return <div><h1>Welcome</h1></div>
      else
      return <div>sorry, u logged into the wrong account</div>
    }

}
export default Conditional

