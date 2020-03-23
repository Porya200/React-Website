import React , { Component } from 'react';
import PropTypes from 'prop-types';



class Task extends Component {

    StyleComplete () {
        return {
            color : this.props.task.done ? '#fff' : '#000',
            textDecoration : this.props.task.done ? 'none' : 'line-through',
            margin : '7px 0'
        }
    }


    render() {

        const {task} = this.props;

        return  (
            <div className="d-flex justify-content-between align-items-center">
                <span>{task.id}</span> . <h4 style={this.StyleComplete()}>{task.title } - </h4> <p style={this.StyleComplete()}>{task.old} سال سن - از {task.city} - {task.job}</p>
                <button className="btn btn-warning mx-2" onClick={this.props.checkDone.bind(this , task.id)}>خط زدن</button>
                <button className="btn btn-danger" style={{margin : '0 10px'}} onClick={this.props.deleteTask.bind(this , task.id)}> حذف</button>
            </div>
        )
    }
}


Task.prototypes = {
    task : PropTypes.object.isRequired
}
export default Task;