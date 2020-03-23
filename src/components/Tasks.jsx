import React , { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task'

class Tasks extends Component {
    render () {
        return this.props.tasks.map(task => 
        <Task 
          task={task} 
          deleteTask={this.props.deleteTask} 
          key={task.id}
          checkDone = {this.props.checkDone}
        />)
    }
}

Tasks.prototypes = {
  tasks : PropTypes.array.isRequired
}

export default Tasks;