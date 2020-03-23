import React, { Component , Fragment } from 'react'
import NumberFormat from '@outlinerisk/react-number-format';
import persianNum from 'persianjs';


export default class toNum extends Component {

    state = {
        price : []
    }


    componentDidMount() {
        return (
            <NumberFormat value={this.props.price} thousandSeparator={true} onValueChange={(values) => {
                const { formattedValue } = values;
                this.setState({ 
                    price : values.formattedValue
                })
                console.log(formattedValue)
            }}/>
        )
    }


    render() {
        return (
            <Fragment>
                <span>{(persianNum(this.state.price).englishNumber()._str)}</span>
            </Fragment>
        )
    }
}

