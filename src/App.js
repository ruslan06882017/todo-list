import React from 'react';
import './App.css';
import TodoList from './components/todo-list';

class App extends React.Component {
  state = {

  }
  render(){
    return (
      <div className="App">
          <form onSubmit={() => {}}>
            <h1> Todo list Project </h1>
            <hr/>
            <input type="text"
                    placeholder="Add new task here" 
                    className="todo-item-main"
                    id="taskId"
            />
            <button onClick={this.handleAddTask} 
                    className="todo-item-btn"> Add task</button>
            <TodoList/>
          </form>
      </div>
    );
  }

  handleAddTask = e => {
    e.preventDefault();
    let taskValue = document.getElementById("taskId").value;
    let storageData = JSON.parse(localStorage.getItem('data')) || [];
    storageData.push({id: Date.now(), name: taskValue});
    localStorage.clear();
    localStorage.setItem('data', JSON.stringify(storageData));
    this.setState({});
  }
}

export default App;
