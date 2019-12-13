import React, {Component} from 'react';
import Todos from "./todo";
import AddTodo from "./addForm";

class App extends Component {
    state = {
        todos: [
            {id: 1, content: 'buy a milk'},
            {id: 2, content: 'sell a milk'}
        ]
    };
    deleteTodo = (id) => {
        console.log(id);
        const todos=this.state.todos.filter(el=>{
            return el.id!==id;
        });
        this.setState({todos});
    };
    addToDo=(content)=>{
        console.log(content)
        const newState=[...this.state,{
           id:this.state.todos.length+1,
           content:content
        }];
        this.setState(newState);
    };
    render() {
        return (
            <div className="App container">
                <h1 className="center blue-text">Todos</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <AddTodo addToDo={this.addToDo}/>
            </div>
        );
    }
}

export default App;
