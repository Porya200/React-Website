import React, { Component } from 'react'

class event extends Component {

    state = {
        message : 'رو من کلیک کن :)'
    }

    eventHandler = () => {
        setTimeout (() => {
            this.setState ({
                message : 'آفرین !!'
            })
            setTimeout(() => {
                this.setState ({
                    message : 'رو من کلیک کن :)'
                })
            } , 2000)
        } , 2000)
    }

    loading () {
        
    }

    render() {
        return (
            <div className="col-lg-4 container">
                <button className="btn btn-info" onClick={this.eventHandler}>{this.state.message}</button>
            </div>
        )
    }
}

export default event

