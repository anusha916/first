import React,{Component} from 'react'
/*constructor,static getDerivedFromState,render, ComponentDidMount*/
class LifecycleA extends Component{
    constructor(){
        super()
        this.state={
            username:"anusha"
        }
        console.log("LifecycleA constructor method");
    }
    
    static getDerivedStateFromProps(state,props){
        console.log("LifecycleA getderivedstate method");
        return null;
    }
    componentDidMount(){
        console.log("LifecycleA didmount method");
    }
    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate method");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifecycleA getSnapShot method");
        return null;
    }
    componentDidUpdate()
    {
        console.log("LifecycleA ComponentDidUpdate method");
    }
    render()
    {
        console.log("LifecycleA render method");
        return <div>LifecycleA</div>
    }


}
export default LifecycleA