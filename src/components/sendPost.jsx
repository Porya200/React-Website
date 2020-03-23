import React, { Component , Fragment } from 'react'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock , faCalendarAlt , faTrashAlt } from '@fortawesome/free-regular-svg-icons';

export default class sendPost extends Component {

    state = {
        id : Math.floor(Math.random() * 100) +1 ,
        firstName : '' ,
        lastName : '',
        old : '',
        dad : '',
        feild : '',
        GPA : '',
        posts : []
    }

    handleChange = event => {
        this.setState ({
            [event.target.name] : event.target.value ,
        })
    }

    async componentDidMount() {
        await axios.get('https://us-central1-react-api-test-168e7.cloudfunctions.net/app/api/read')
        .then(res => {
            this.setState({
                posts : res.data
            })
        })
        .catch (error => {
            console.log(error);
        })
    }

    // async componentDidUpdate(prevState) {
    //     if (prevState.posts !== this.state.posts) {
    //         await axios.get('https://us-central1-react-api-test-168e7.cloudfunctions.net/app/api/read')
    //         .then(res => {
    //             this.setState({
    //                 posts : res.data
    //             })
    //         })
    //         .catch (error => {
    //             console.log(error);
    //         })
    //     }
    // }
    handleSubmit = event => {
        event.preventDefault();

        axios.post('https://us-central1-react-api-test-168e7.cloudfunctions.net/app/api/create' , this.state)
            .then (res => {
                console.log(res , window.alert('با موفقیت پست اضافه شد :)'))
            })
            .catch (error => {
                console.log(error);
            })
    }
    render() {
        const {firstName ,lastName , old , dad , feild , GPA } = this.state
        return (
            <Fragment>
            <div className="col-lg-5 container" style={{textAlign : 'right'}}>
                <h4>پست دلخواه اضافه کنید :</h4>
                <form onSubmit={this.handleSubmit }>
                <div className="col px-0 d-flex flex-column mt-3 flex-lg-row align-items-center">
                    <div className="col-lg-4 px-0 pl-lg-2">
                        <div className="form-group">
                            <label htmlFor="input-0">نام :</label>
                            <input type="text" className="form-control" value={firstName} name="firstName" id="input-0" onChange={this.handleChange}/> 
                        </div>
                    </div>
                    <div className="col-lg-4 px-0 pl-lg-2">
                        <div className="form-group">
                            <label htmlFor="input-1">نام خانوادگی :</label>
                            <input type="text" className="form-control" value={lastName} name="lastName" id="input-1" onChange={this.handleChange}/> 
                        </div>
                    </div>
                    <div className="col-lg-4 px-0">
                        <div className="form-group">
                            <label htmlFor="input-2">نام پدر :</label>
                            <input type="text" className="form-control" value={dad} name="dad" id="input-2" onChange={this.handleChange}/> 
                        </div>
                    </div>
                </div>
                <div className="col px-0 d-flex flex-column flex-lg-row align-items-center">
                    <div className="col-lg-4 px-0 pl-lg-2">
                        <div className="form-group">
                            <label htmlFor="input-3">سن :</label>
                            <input type="number" className="form-control" value={old} name="old" id="input-3" onChange={this.handleChange}/> 
                        </div>
                    </div>
                    <div className="col-lg-4 px-0 pl-lg-2">
                        <div className="form-group">
                            <label htmlFor="input-4">رشته تحصیلی :</label>
                            <input type="text" className="form-control" value={feild} name="feild" id="input-4" onChange={this.handleChange}/> 
                        </div>
                    </div>
                    <div className="col-lg-4 px-0">
                        <div className="form-group">
                            <label htmlFor="input-5">معدل :</label>
                            <input type="number" className="form-control" value={GPA} name="GPA" id="input-5" onChange={this.handleChange}/> 
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">ارسال پست</button>
                </div>
                </form>
            </div>
            <div className="container">
            <h4 className="text-center font-weight-bolder mb-3 mt-4">دیدن پست ها</h4>
                <div className="col-12 d-flex flex-wrap justify-content-center px-0">
                 {
                        this.state.posts.map((post , index) => {
                            return (
                            <div className="col-lg-6 my-2 card-deck" key={index}>
                                <div className="card">
                                    <div className="card-body pb-0 text-dark" style={{direction : 'rtl' , textAlign: 'right'}}>
                                        <div className="col px-0 d-flex flex-column flex-lg-row">
                                            <div className="col-lg-4">
                                                <p className="font-weight-bold" style={{fontSize : '16px'}}>نام : {post.firstName} {post.lastName}</p>
                                            </div>
                                            <div className="col-lg-4">
                                                <p className="font-weight-bold" style={{fontSize : '16px'}}> سن : {post.old} سال</p>
                                            </div>
                                            <div className="col-lg-4">
                                                <p className="font-weight-bold" style={{fontSize : '16px'}}>نام پدر : {post.dad}</p>
                                            </div>
                                        </div>
                                        <div className="col px-0 d-flex flex-column flex-lg-row">
                                            <div className="col-lg-6">
                                                <p className="font-weight-bold" style={{fontSize : '16px'}}>رشته تحصیلی : {post.feild}</p>
                                            </div>
                                            <div className="col-lg-6">
                                                <p className="font-weight-bold" style={{fontSize : '16px'}}> معدل : {post.GPA}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between align-items-center text-dark" style={{fontSize : '15px'}}>
                                        <span className="d-flex align-items-center" style={{fontWeight : 600 , color : '#565656'}}><FontAwesomeIcon className="ml-1" icon={faCalendarAlt} color={'#565656'}/>{post.created_at.slice(0 , 11)}</span>
                                        <button onClick={this.deletePost} className="btn p-0"><FontAwesomeIcon className="text-danger mr-1" icon={faTrashAlt}/></button>
                                        <span className="d-flex align-items-center" style={{fontWeight : 600 , color : '#565656'}} >{post.created_at.slice(11 , 19)}<FontAwesomeIcon className="mr-1" icon={faClock} color={'#565656'}/></span>
                                    </div>
                                </div>
                            </div>
                        )})
                    }
                </div>
                </div>
            </Fragment>
        )
    }
}
