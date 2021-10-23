import React, { Component } from "react";
import Title from "./Title";
import NavBar from "./Navbar";
import WeedList from "./WeedList";
import ShoppingCart from "./ShoppingCart";
import {DATA} from './WeedData'
import BottomPage from "./BottomPage";
import {FaTree} from 'react-icons/fa'


export default class Store extends React.Component{

    constructor(props) {
        super(props);
		
	
        this.state = {
            cart: [],
            strains: DATA,  /*grabbing the weed llst information */
			
        }
    }
		
	
    handleAddToCart = (id) => {
		
		this.setState(state => {
			let item = state.cart.find(i => i.id === id);
			let cart;
					
			if(!item) {
				
				const strain = state.strains.find(c => c.id === id);
				item = { id, text: strain.name + ':   ' + '$', cost: strain.cost, imageUrl: strain.image,  number: 1 };
				cart = state.cart.concat([ item ]);

					
			}
			else {
			
				const itemIndex = state.cart.indexOf(item);
				cart = [ ...state.cart ];
				cart[itemIndex] = { ...item, number: item.number + 1};
			}
			return { cart };
		})
	}

	addToCartAgain = (id) => {
		this.setState(state => {
			const item = state.cart.find(i => i.id === id);
			let cart = [];
			if(item.number) {
				const strain = state.strains.find(c => c.id === id);
				item = { id,  number: 1 };
				cart = state.cart.concat([ item ]);
			}
		})
	}

	 handleRemoveFromCart = (id) => {
		
		this.setState(state => {
			const item = state.cart.find(i => i.id === id);
			let cart = [];
			if(item.number === 1) {
				
				cart = state.cart.filter(i => i.id !== id);
			}
			else {
				
				const itemIndex = state.cart.indexOf(item);
				cart = [ ...state.cart ];
				cart[itemIndex] = { ...item, number: item.number - 1};
			}
			return { cart };
		})
		
    }



	render(){
		const smoke = <FaTree size={30} />
		//    const modalItems = this.props.cart.map(item => 
        //     <ShoppingCart item={item} />)

		return(
			<div className="home-page-cards-container">
			<Title />
				<NavBar/> 
				<br />
				<h2>{smoke}Welcome to The Shop{smoke}</h2>
				
						<WeedList strains={this.state.strains} addToCart={this.handleAddToCart} />
					<ShoppingCart cart={this.state.cart} addToCartAgain={this.addToCartAgain} removeFromCart={this.handleRemoveFromCart}/> 
					<BottomPage />
				
			</div>
		);

	}

}

