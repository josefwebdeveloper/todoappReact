import React, {Component} from 'react';

class AddTodo extends Component {
    state = {
        content: ""
    };
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addToDo(this.state.content)
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleChange}>
                    <label> Add new todo</label>
                    <input type="text" onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}


export default AddTodo;
