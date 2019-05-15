import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Wash clothes',
        completed: false
      },
      {
        id: 3,
        title: 'Feed dog',
        completed: false
      },
    ]
  }

  changeCompletion = (id) => {
    this.setState({todos: this.state.todos.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })})
  }

  deleteTodo = (id) => {
    this.setState({todos: this.state.todos.filter((todo) => {
      return todo.id !== id;
    })})
  }

  addTodo = (title) => {
    const newTodo = {
      id: this.generateNewId(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  generateNewId = () => {
    let num = this.state.todos.length;
    return ++num;
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} changeCompletion={this.changeCompletion} deleteTodo={this.deleteTodo}/>
            </React.Fragment>
          )} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
