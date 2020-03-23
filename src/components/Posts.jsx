import React, { Component , memo } from 'react';
import Axios from 'axios';
import persianNum from 'persianjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import Num from './toNum'


class Posts extends Component {

    state = {
        posts : [] , 
        error : ''
    }

    async componentDidMount() {
        await Axios.get('https://api.jsonbin.io/b/5e63c996763fa966d4120c98')
        .then(res => {
            this.setState({
                posts : res.data.data.data
            })
        })
        .catch (error => {
            this.setState({
                error : 'در انتفال داده مشکلی به وجود آمده است !!'
            })
        })
    }

    render() {

        return (
            <div className="container">
            <h3 className="text-center font-weight-bolder my-3">دیدن پست ها</h3>
            <span className="alert-danger text-center">{this.state.error}</span>
                <div className="col-12 d-flex flex-wrap justify-content-center">
                    {
                        this.state.posts.map(post => {
                            return (
                            <div className="col-lg-4 my-2 card-deck" key={post.id}>
                                <div className="card">
                                    <div className="my-img">
                                        <img src={post.image} className="card-img-top" alt="{post.title}"/>
                                    </div>
                                    <div className="card-body text-dark" style={{direction : 'rtl' , textAlign: 'right'}}>
                                        <h5 className="card-title font-weight-bolder">{(persianNum(post.title).englishNumber()._str)}</h5>
                                        <p className="card-text font-weight-normal" style={{fontSize : '13px'}}>{post.body.slice(0, 190)+'...'}</p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between align-items-center text-dark" style={{fontSize : '15px'}}>
                                        <span className="font-weight-bold text-danger">{(persianNum(post.price).englishNumber()._str)}
                                        <Num price={post.price}/>
                                        تومان</span>
                                        <span className="d-flex align-items-center" style={{fontWeight : 600 , color : '#565656'}} >{(persianNum(post.created_at.slice(11 , 19)).englishNumber()._str)}<FontAwesomeIcon className="mr-1" icon={faClock} color={'#565656'}/></span>
                                    </div>
                                </div>
                            </div>
                        )})
                    }
                </div>
            </div>
        )
    }
}

export default memo(Posts)
