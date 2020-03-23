import React , { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TaskForm extends Component {

    state = {
        title : '',
        old : '',
        city : '',
        job : ''
    }

    onSubmit = e => {
        this.props.AddTask(this.state.title , this.state.old , this.state.city , this.state.job);
        e.preventDefault();
    }

    onChange = event => {
        this.setState({
            [event.target.id] : event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input id="title" className="form-control" type="text" style={{padding:'10px 15px'}} placeholder="نام و نام خانوادگی خود را وارد کنید" onChange={this.onChange} value={this.state.title}/>
                </div>
                <div className="form-group">
                    <input id="old" className="form-control" type="number" style={{padding:'10px 15px'}} placeholder="سن خود را وارد کنید" onChange={this.onChange} value={this.state.old}/>
                </div>
                <textarea id="city" className="form-control" placeholder="اسم شهر خود را بنویسید" rows="5" style={{padding:'10px 15px'}} onChange={this.onChange} value={this.state.city}></textarea>
                <div className="form-group d-flex my-2">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" style={{margin: '0 0 0 5px'}} type="radio" name="true" id="job" onChange={this.onChange} value={'کارمند'}/>
                        <label className="form-check-label" style={{fontSize: '17px'}} htmlFor="job">کارمند</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" style={{margin: '0 0 0 5px'}} type="radio" name="true" id="job" onChange={this.onChange} value={'جویای کار'}/>
                        <label className="form-check-label" style={{fontSize: '17px'}} htmlFor="job">جویای کار</label>
                    </div>
                </div>
                <div className="form-group">
                    <button className="btn btn-block btn-success" type="submit">ثبت کنید</button>
                </div>
            </form>
        )
    }


}