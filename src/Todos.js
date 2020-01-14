import React from 'react'

const todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className='collection-item center' key={todo.id}>
                    <span onClick={()=> {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>)
        })) :
        (<p className= 'center'>You have no todos ....</p>);

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default todos;