import React from "react";
import { Card } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import NavBar from "./Navbar";
import Title from "./Title";

import BottomPage from "./BottomPage";

function HomePage(){

const history = useHistory();

	return(
		<div className="home-page-cards-container">
			<Title />
				<NavBar />
				<br />
				
			<div className="home-page-cards">
				<Container>
					  <Row>
					    <Col>
							<Card style={{ width: '18rem' }}>
								<div className="card-border">
								  <Card.Img variant="top" src="https://previews.123rf.com/images/pk74/pk741511/pk74151100282/48244413-marijuana-hemp-cannabis-sativa-or-cannabis-indica-leaf-on-white-background.jpg" />
								  <Card.Body>
								   <h4>The Shop</h4>
								    <Card.Text>
								      "Weed Like 2 Help" presents some of the industries leading Sativas and Indicas.
								    </Card.Text>
								    <button className="btn btn-success" onClick={() => history.push('/Store')}>
										Get Shopping
									</button>
								  </Card.Body>
								</div>
							</Card>	
						</Col>

						 <Col>
							<Card style={{ width: '18rem' }}>
								<div className="card-border">
								  <Card.Img variant="top" src="https://www.clovrcannabis.com/hs-fs/hubfs/indica-vs-sativa-1.jpg?width=500&name=indica-vs-sativa-1.jpg" height="270px" />
								  <Card.Body>
								    <h4>Sativa vs Indica</h4>
								    <Card.Text>
								      Decriptions and explanations of the differences between the Sativa plant and Indica plant.
								    </Card.Text>
								    <button className="btn btn-success" onClick={() => history.push('/IndicaVsSativa')}>
										Learn the difference
									</button>
								  </Card.Body>
								</div>
							</Card>	
						</Col>
					    
						<Col>
							<Card style={{ width: '18rem' }}>
								<div className="card-border">
								  <Card.Img variant="top" src="https://image.cannabis.wiki/news/istock-651496228-1582414100-1440w.jpeg" height="270px" />
								  <Card.Body>
								     <h4>Take the Quiz</h4>
								    <Card.Text>
								      A quick quiz to test your knowledge on the differences between Sativas and Indicas
								    </Card.Text>
								    <button className="btn btn-success" onClick={() => history.push('/quiz')}>
										Take the Quiz
									</button>
								  </Card.Body>
								</div>
							</Card>	
						</Col>
					 </Row>
				</Container>
			
				<br />
				<BottomPage />			
			</div>
		</div>
	);
}
export default HomePage;