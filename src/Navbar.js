import React from "react";
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import  {FaShoppingCart } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { BiPurchaseTag } from 'react-icons/bi'
import {GiBlackBook} from 'react-icons/gi'
import {AiFillQuestionCircle} from 'react-icons/ai'
import ShoppingCart from "./ShoppingCart";

function NavBar(){
	return(
	<div className="Navbar">
		<Navbar bg="dark" variant="dark">
		    <Container>
		    <Nav className="me-auto">
		      <Nav.Link href="/HomePage">Home <FaHome /></Nav.Link>
		      <Nav.Link href="/Store">Store <BiPurchaseTag /> </Nav.Link>
			  <Nav.Link href="IndicaVsSativa">Indica Vs Sativa< GiBlackBook/>  </Nav.Link>
			<Nav.Link href="quiz">Take the Quiz < AiFillQuestionCircle /> </Nav.Link>	
		
				
		    </Nav>

		    </Container>
  		</Navbar>
	</div>

	);

}

export default NavBar;
