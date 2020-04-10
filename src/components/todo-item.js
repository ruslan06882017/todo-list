import React from 'react'

class TodoItem extends React.Component {

    render(){
        //console.log(this.props.task.name);
        return (
            <div className="todoItemContainer">
                <span><input type="checkbox"/></span>
                <input type="text" className="todo-item" value={this.props.task.name}/>
                <span>X</span>
            </div>
        )
    }
}

export default TodoItem;