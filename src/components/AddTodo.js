import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    changeTodo = (e) => this.setState({title: e.target.value});

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{display: 'flex', marginBottom: '20px'}}>
          <input type="text" name="title" placeholder="Type here..." style={inputStyle} value={this.state.title} onChange={this.changeTodo}/>
          <input type="submit" value="Submit" className="btn" style={btnStyle} />
      </form>
    )
  }
}

const inputStyle = {
    flex: '10',
    padding: '10px'
}

const btnStyle = {
    background: '#333', 
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    flex: '1', 
    padding: '10px'
}

export default AddTodo
