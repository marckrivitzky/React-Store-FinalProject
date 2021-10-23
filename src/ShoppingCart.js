
import React, { Component } from 'react'
import {Modal} from 'react-bootstrap'
import {IoLogoTux} from 'react-icons/io'
import {SiDuckduckgo} from 'react-icons/si'
import {BsFillCartCheckFill} from 'react-icons/bs'
class CartItem extends Component {

    render() {
		let littleNum = this.props.item.number
		let theCost = this.props.item.cost
			
        return (
            <li className="list-group-item p-3">
                <span className="badge bg-primary rounded-pill me-1">{ littleNum }</span>
                
				{/* below puts the cost of each item in the shopping cart while accounting for the quantity	 */}

                { this.props.item.text } {littleNum > 1 ? theCost * littleNum : theCost} 
                <img src={this.props.item.imageUrl} height="90px" width="90px"/>
                   
					{/* button below removes items from the cart based on quantity */}
                <button className="btn btn-danger btn-sm float-end" 
                    onClick={ () => this.props.removeFromCart(this.props.item.id) }>Delete
				</button>

            </li>
        )
    }
}

export default class ShoppingCart extends Component {
    constructor(props){
        super(props);
        
        this.state = {
			isOpen: false,
            infoIsOpen: false,
			
		}
    }

	// infoOpen & infoCloseModal is for opening and closing the information during checkout,	
    infoOpenModal = () => this.setState({infoIsOpen: true})

	infoCloseModal = () => {
		this.setState({infoIsOpen: false, isOpen: false})
	}

	// Open & CloseModal is for opening the shopping cart
    openModal = () => this.setState({isOpen: true})

	closeModal = () => {
		this.setState({isOpen: false})
	}


    render() {
        const shoppingCart = <IoLogoTux size={60} />
        const happy = <SiDuckduckgo size={50} />
        const emptyCartItem = <li className="list-group-item text-muted text-center p-3">Your cart is empty</li>
      
        const cartItems = this.props.cart.map(item => 
            <CartItem item={item} removeFromCart={this.props.removeFromCart} />)
       
	
		/*below adds the totals of the items into the modal, accounting for quantity */
		const modalTotal = this.props.cart.reduce(function(runningTotal, item) {
			
			return item.number <= 1 ? item.cost + runningTotal : item.cost * item.number + runningTotal;
			
		},0);
			

        return (
           <div className="overall-container">
                <div className="row my-3" >
                    <div className="col-md" >

                    <button className="btn btn-dark" id="shop-button" onClick={this.openModal}> 
                                 Shopping Cart 
                          <span className="badge bg-warning rounded-pill me-1">  { this.props.cart.length }</span>  
                    </button>
                       
                    <br />
                        <Modal show={this.state.isOpen} onHide={this.closeModal}>
        			        <Modal.Header closeButton>
        			        <h3>{shoppingCart}  Thanks for shopping  {happy}      </h3>
        			        </Modal.Header>
        			        <Modal.Body>
                                <ul className="list-group">
                                    <h4 className="shopping-cart-title">Shopping Cart</h4>
                                    { (this.props.cart.length === 0) ? emptyCartItem : cartItems }      
                                            
                                     <br />
                                </ul>
                                     <br />

                            </Modal.Body>
                            <button className="btn btn-success" onClick={this.infoOpenModal}>Checkout</button>
                            <br />
                        </Modal>
                    </div>
                </div>

                <div className="the-modal">
				
    				 <Modal show={this.state.infoIsOpen} onHide={this.infoCloseModal}>
    			        <Modal.Header closeButton>
    			          <Modal.Title>Checkout <BsFillCartCheckFill />  </Modal.Title>
    			        </Modal.Header>
    			        <Modal.Body>
    					<div class="input-group mb-3">
    					
    					  <input type="text" class="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1" />
    					 <input type="text" class="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1" />
    					</div>

    					<div class="input-group mb-3">
    					 <input type="text" class="form-control" placeholder="Email Address" aria-label="Email Address" aria-describedby="basic-addon2" />
    					  <span class="input-group-text" id="basic-addon2">@example.com</span>
    					</div>

    					<div class="input-group mb-3">
    					  <input type="text" class="form-control" placeholder="Phone Number" aria-label="Phone Number" aria-describedby="basic-addon2" />
    					</div>

    					<div class="input-group mb-3">
    					  <input type="text" class="form-control" placeholder="Credit Card Number" aria-label="Credit Card Number" aria-describedby="basic-addon2" />
    					</div>

    					<div class="input-group mb-3">
    					  <input type="text" class="form-control" placeholder="Expiration Date" aria-label="Exiration Date" />
    					 
    					  <input type="text" class="form-control" placeholder="EVC" aria-label="Server" />
    					</div>

    					<div class="input-group mb-3">
    					  <input type="text" class="form-control" placeholder="Mailing Address" aria-label="Exiration Date" />
    					 
    					  <input type="text" class="form-control" placeholder="City" aria-label="Server" />
    					

    						<select class="selectpicker" id="state" name="state">
    							<option value="">State</option>
    							<option value="AK">Alaska</option>
    							<option value="AL">Alabama</option>
    							<option value="AR">Arkansas</option>
    							<option value="AZ">Arizona</option>
    							<option value="CA">California</option>
    							<option value="CO">Colorado</option>
    							<option value="CT">Connecticut</option>
    							<option value="DC">District of Columbia</option>
    							<option value="DE">Delaware</option>
    							<option value="FL">Florida</option>
    							<option value="GA">Georgia</option>
    							<option value="HI">Hawaii</option>
    							<option value="IA">Iowa</option>
    							<option value="ID">Idaho</option>
    							<option value="IL">Illinois</option>
    							<option value="IN">Indiana</option>
    							<option value="KS">Kansas</option>
    							<option value="KY">Kentucky</option>
    							<option value="LA">Louisiana</option>
    							<option value="MA">Massachusetts</option>
    							<option value="MD">Maryland</option>
    							<option value="ME">Maine</option>
    							<option value="MI">Michigan</option>
    							<option value="MN">Minnesota</option>
    							<option value="MO">Missouri</option>
    							<option value="MS">Mississippi</option>
    							<option value="MT">Montana</option>
    							<option value="NC">North Carolina</option>
    							<option value="ND">North Dakota</option>
    							<option value="NE">Nebraska</option>
    							<option value="NH">New Hampshire</option>
    							<option value="NJ">New Jersey</option>
    							<option value="NM">New Mexico</option>
    							<option value="NV">Nevada</option>
    							<option value="NY">New York</option>
    							<option value="OH">Ohio</option>
    							<option value="OK">Oklahoma</option>
    							<option value="OR">Oregon</option>
    							<option value="PA">Pennsylvania</option>
    							<option value="PR">Puerto Rico</option>
    							<option value="RI">Rhode Island</option>
    							<option value="SC">South Carolina</option>
    							<option value="SD">South Dakota</option>
    							<option value="TN">Tennessee</option>
    							<option value="TX">Texas</option>
    							<option value="UT">Utah</option>
    							<option value="VA">Virginia</option>
    							<option value="VT">Vermont</option>
    							<option value="WA">Washington</option>
    							<option value="WI">Wisconsin</option>
    							<option value="WV">West Virginia</option>
    							<option value="WY">Wyoming</option>
    						</select>
    					
    					</div>
    		
    					<div class="input-group">
    					  <br />
    					  <div className="modal-total">Total: $ {modalTotal}.00  </div>
    								  
    					</div>
    					
    					</Modal.Body>
    			        <Modal.Footer>
    			          <button className="btn btn-primary" onClick={this.infoCloseModal}>Place Order</button>
    						<button className="btn btn-danger" onClick={this.infoCloseModal}>Close</button>
    			        </Modal.Footer>
    			      </Modal>

			    </div>

           </div>
        )
    }
}