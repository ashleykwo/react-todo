import React, { Component } from 'react';
import PropTypes from 'prop-types';

const btnStyle = {
  background: '#F00',
  color: '#FFF',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  float: 'right'
}

export class TodoItem extends Component {
  getStyles = () => {
    return {
      background: '#FAFAFA',
      padding: '10px',
      color: this.props.todo.completed ? '#555' : 'black'
    }
  }

  render() {
    const { id, title, completed } = this.props.todo

    return (
      <div style={this.getStyles()}>
        <p>
          <input type="checkbox" checked={completed} onChange={this.props.isChecked.bind(this, id)} />
          { title }
          <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>X</button>
        </p>
      </div>
    )
  }
}

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default TodoItem
