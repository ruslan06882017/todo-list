import React from 'react'
import TodoItem from './todo-item'

class TodoList extends React.Component {

    state = {
        Tasks: [
            {id: 1, name: "Watch ufc"},
            {id: 2, name: "Do home work"},
            {id: 3, name: "Eat"},
            {id: 4, name: "Sleep"}
        ]
    }

    render() {
        const taskList = this.state.Tasks;
        return (
          <div className="taskListContainer">
              {taskList.map((task) => 
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