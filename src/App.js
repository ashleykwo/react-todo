import React, { Component } from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Start coding',
        completed: true
      },
      {
        id: uuid.v4(),
        title: 'Balance budget',
        completed: false
      },
      {
        id: uuid.v4(),
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

  addTodo = (title) => {
    const newTodo = {
      id : uuid.v4(),
      title,
      completed : false,
    }
    this.setState({ todos : [...this.state.todos, newTodo]})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={ this.state.todos } isChecked={this.isChecked} delTodo={this.delTodo}/>
      </div>
    );
  }
  
}

export default App;
