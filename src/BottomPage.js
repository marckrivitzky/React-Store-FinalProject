import React from 'react'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

function BottomPage(){
const instagram = <BsInstagram size={30} color={'white'} />
const twitter = <BsTwitter size={30} color={'white'} />
const facebook = <BsFacebook size={30} color={'white'} />
const email = <MdEmail size={30} color={'white'} />
	return(
		<div className="text-center text-md-right" id="bottom-page-info">		
			<div class="container">
			  <div class="row">
			    <div class="col">
					<br />
			      <h4 className="about-us">About us</h4> 
					 <br/>
					 <p className="about-us"> 
						'WEED LIKE 2 HELP' is an industry leading company
					 	 dedicated to providing the best marijuana in the entire
					 	 Tri-State area!<br /><br />
						    Location: Red Bank, New Jersey <br />
						 Contact: 732-214-9813
					  </p><br />
						<button className="btn btn-dark"  title="Instgram Page"> {instagram}</button> 
						<button className="btn btn-dark" title="Twitter Page"> {twitter}</button> 
						<button className="btn btn-dark" title="Facebook Page"> {facebook}</button> 
						<button className="btn btn-dark" title="Email Address"> {email}</button>  
			    </div>
			</div>
		</div>
	</div>
	);
}
export default BottomPage