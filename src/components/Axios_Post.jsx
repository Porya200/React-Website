import React, { Component } from 'react'
import Axios from 'axios';

export default class AxiosPost extends Component {

    state = {
        title : '' ,
        price : '' ,
        body : '' ,
        image : null
    }

    handleChange = event => {
        this.setState ({
            [event.target.name] : event.target.value
        })
    }

    handlefile = event => {
        this.setState ({
            image : event.target.files[0]
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const fd = new FormData();
        fd.append('image' , this.state.image , this.state.image.name)

        Axios.post('https://us-central1-react-api-test-168e7.cloudfunctions.net/app/api/create' , fd , {
            onUploadProgress : ProgressEvent => {
                console.log(`Upload Progress : ${ Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) } %`);
            }
        } )
            .then (res => {
                console.log(res)
                console.log(res.data , window.alert('با موفقیت پست اضافه شد :)'))
            })
            .catch (error => {
                console.log(error);
            })
    }

    render() {
        const {title , price , body} = this.state
        return (
            <div className="col-lg-5 container" style={{textAlign : 'right'}}>
                <h4>پست دلخواه اضافه کنید :</h4>
                <form onSubmit={this.handleSubmit }>
                <div className="col px-0 d-flex flex-column mt-3 flex-lg-row align-items-center">
                    <div className="col-lg-6 px-0 pl-lg-2">
                        <div className="form-group">
                            <label htmlFor="input-1">عنوان پست :</label>
                            <input type="text" className="form-control" value={title} name="title" id="input-1" onChange={this.handleChange}/> 
                        </div>
                    </div>
                    <div className="col-lg-6 px-0">
                        <div className="form-group">
                            <label htmlFor="input-2">قیمت پست :</label>
                            <input type="number" className="form-control" value={price} name="price" id="input-2" onChange={this.handleChange}/> 
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="input-3">متن پست :</label>
                    <textarea rows="4" type="text" value={body} className="form-control" name="body" id="input-3" onChange={this.handleChange}/> 
                </div>
                <div className="form-group">
                    <label htmlFor="input-4">تصویر پست :</label>
                    <input type="file" className="form-control" ref={fileInput => this.fileInput = fileInput} name="image" id="input-4" onChange={this.handlefile}/> 
                    <div className="btn-group btn-group-toggle mt-2" data-toggle="buttons">
                        <label className="btn btn-outline-success">
                            <input type="radio" name="options" onClick={() => this.fileInput.click()} id="option1"/> انتخاب فایل
                        </label>
                        <label className="btn btn-outline-success">
                            <input type="radio" name="options" onClick={this.handleSubmit} id="option2"/> آپلود فایل
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">ارسال پست</button>
                </div>
                </form>
            </div>
        )
    }
}
