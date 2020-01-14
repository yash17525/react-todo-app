import React, {Component} from 'react'

class AddTodo extends Component{
    state = {
        content: ''
    }

    handleOnSubmit =(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })

    }

    handleOnChange=(e)=>{
        this.setState({
            content: e.target.value
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Enter a Todo</label>
                    <input onChange={this.handleOnChange} value={this.state.content}></input>
                </form>
            </div>
        )
    }
}

export default AddTodo;