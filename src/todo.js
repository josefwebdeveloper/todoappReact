import React from "react";


const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(el => {
            return (
                <div className="collection-item" key={el.id}>
                    <span onClick={() => {
                        deleteTodo(el.id)
                    }}>{el.content}</span>

                </div>
            )
        })
    ) : (
        <p className="center">No todos</p>
    );
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
};
export default Todos;
