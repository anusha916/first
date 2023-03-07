import React,{Component} from 'react';
class Form extends Component{
    constructor(){
        super()
        this.state={
            username:"",
            comments:"",
            topics:"react"
        }
    }
    changehandler=(event)=>{
        this.setState({
            username:event.target.value
        })
    }
    changecomments=(event)=>{
        this.setState({
            comments:event.target.value

            })
        }
        selectoption=(e)=>{
            this.setState({
               topics:e.target.value
            })
        }
        submitdata=(e)=>{
            alert(`${this.state.username} ${this.state.comments} ${this.state.topics}`)
            e.preventDefault()
        }

    render(){
        return (
            <div>
                <form>
                    <label>username</label>
                    <input type="text" value={this.state.username} onChange={this.changehandler}/>
                </form>
                <form>
                    <label>comments</label>
                    <textarea value={this.state.comments} onChange={this.changecomments}></textarea>
                </form>
                <form>
                    <label>topics</label>
                    <select value={this.state.topics} onChange={this.selectoption}>
                    <option value="react">react</option>
                    <option value="html">html</option>
                    <option value="css">css</option>
                    </select>
                </form>
                <form onSubmit={this.submitdata}>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}
export default Form