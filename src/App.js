import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Start coding',
        completed: true
      },
      {
        id: 2,
        title: 'Balance budget',
        completed: false
      },
      {
        id: 3,
        title: 'Read book',
        completed: false
      },
    ]
  }

  isChecked = (id) => {
    this.setState({ todos : this.state.todos.map( todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })} );
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos : [...this.state.todos.filter(todo => todo.id !== id)]}) // gets everything that is NOT the clicked ID
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Todos todos={ this.state.todos } isChecked={this.isChecked} delTodo={this.delTodo}/>
      </div>
    );
  }
  
}

export default App;
