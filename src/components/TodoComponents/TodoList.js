// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

const TodoList = props => {
    const sortedTodo = props.items.sort(a,b) => {
        a.proppy.completed - b.proppy.completed
    }
    return(
        <div className = "todo-list">
            {sortedTodo.map(item => {

            })}

        </div>

    )
    
}


export default TodoList;