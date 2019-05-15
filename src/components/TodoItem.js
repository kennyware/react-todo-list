import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            borderBottom: '1px dotted #000',
            padding: '10px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.changeCompletion.bind(this, id)}/> {' '}
          {title}
          <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>x</button>
        </p>
      </div>
    )
  }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
  background: '#ff0000',
  border: 'none',
  borderRadius: '50%',
  color: '#fff',
  cursor: 'pointer',
  float: 'right',
  padding: '5px 8px'
}

export default TodoItem
