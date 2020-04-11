import React from 'react'

class TodoItem extends React.Component {

    handleRemoveTask = e => {
    
        const taskId = e.target.dataset.id;
        let storageData = JSON.parse(localStorage.getItem("data")) || []; 

        storageData.forEach(element => {
            console.log(element);
        });
       
    }

    render(){
        //console.log(this.props.task.name);
        return (
            <div className="todoItemContainer">
                <span><input type="checkbox"/></span>
                <label className="todo-item">    
                    {this.props.task.name}
                </label>
                <span 
                    onClick={this.handleRemoveTask}
                    data-id={this.props.task.id}
                >X</span>
            </div>
        )
    }
}

export default TodoItem;