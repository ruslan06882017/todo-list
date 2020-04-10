import React from 'react';
import './App.css';
import TodoList from './components/todo-list';

function App() {
  return (
    <div className="App">
        <form>
          <h1> Todo list Project </h1>
          <hr/>
          <input type="text" placeholder="Add new task here" className="todo-item-main"/>
          <TodoList/>
        </form>
    </div>
  );
}

export default App;
