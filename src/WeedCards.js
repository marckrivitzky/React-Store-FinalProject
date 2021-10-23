import React from 'react'

export default class WeedCards extends React.Component{
	
	render(){
		return(
			 <div className="card mb-3 mx-2 w-25">
	               
	                <div className="card-body-store">
	                    <h4 className="card-title">{this.props.strain.name}</h4>
						<h5 className="card-type-title">"{this.props.strain.type}"</h5>
	                    <p className="card-text">{this.props.strain.description}</p>
						<h5>${this.props.strain.cost}/Oz.</h5>
						
						<button className='btn btn-light' id="zoom"> <img src={this.props.strain.image} alt="images-for-cards" width="90px" height="100px"/> </button>
						
						<br />

	                   <button className="btn btn-warning" id="store-buttons" onClick={ () => this.props.addToCart(this.props.strain.id)  }>
	                        Add to Cart
	                    </button> 
				
	                </div>
	         </div>
		);
	}
}
