import React from 'react'
import TodoItem from './todo-item'

class TodoList extends React.Component {

    render() {
        const storageData = JSON.parse(localStorage.getItem("data")) || [];
        return (
          <div className="taskListContainer">
              {storageData.map((task) => 
                <TodoItem
                    key={task.id}
                    task={task}
                />
               )}
          </div>  
        )
    }
}

export default TodoList;