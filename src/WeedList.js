import React, { Component } from 'react'
import WeedCards from './WeedCards'
import ShoppingCart from './ShoppingCart'

export default class WeedList extends Component {
    render() {
        return (
            <div className="row my-3">
                <div className="col d-flex">
                    { this.props.strains.map(strain => <WeedCards key={strain.id} strain={strain} addToCart={this.props.addToCart} />)}
                </div>
               


            </div>
        )
    }
}