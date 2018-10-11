import React, { Component } from 'react';
import './App.css';

let id= 0
class App extends Component {

  state = {
  	input: '',
    todos: [],
    totalTodos: 0,
    remainingTodos: 0
  }


  addTodo(todo) {
  	const { todos, totalTodos, remainingTodos } = this.state;

  	this.setState(state => ({
  	  todos: todo ? [...todos, {task: todo, id: id++, completed: false}] : todos,
  	  totalTodos: todo ? todos.length + 1 : totalTodos,
  	  remainingTodos: todo ? remainingTodos + 1 : remainingTodos
  	}));
  }

  toggleTodo = (clickedTodo) => {
    const {todos, remainingTodos} = this.state

  	this.setState(state => ({
  	  todos: todos.map(todo => todo.id === clickedTodo.id ? {...todo, completed: !todo.completed} : todo),
      remainingTodos: clickedTodo.completed ? remainingTodos + 1 : remainingTodos - 1
    }));
  } 

  render() {
  	
   const { todos, totalTodos, remainingTodos} = this.state;

   console.log(todos)
   console.log(remainingTodos)
    return (
      <div className="App">
        <div className="header">
          <h1>TO Do App</h1>
        </div>
        <div>
        <input 
          type="text"
          ref={node => this.input = node}/>   
        <button
      	  onClick={() => {
            this.addTodo(this.input.value)
            this.input.value = '';
	        }}
        >
        Add
        </button>

        </div>
        <div className="status-msg">
          <p>{remainingTodos} remaining out of {totalTodos} tasks</p>
        </div>

        <div className="todos">
          <ul className="todo-List">
            {todos.map((todo, index) => (
              <li 
                key={index}
                onClick={e => { this.toggleTodo(todo) }}
                style={{textDecorationLine: todo.completed ? 'line-through' : 'none'}}         
	          >{todo.task}</li>
            ))}
          </ul>
        </div>
        
      </div>
    );
  }
}

export default App;
