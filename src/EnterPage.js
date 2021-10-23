import React from "react";
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { GiFlowerPot } from 'react-icons/gi'

const EnterPage = (props) => {
	const history = useHistory();
	const flower = <GiFlowerPot size={60} />
	const space = ' ';
	return(
		<div className="main-page-container">
			<div className="main-page-body">
				<br /><br />
				<h3 className="enter-page-background"> {flower} Are you 21 years or older? {flower} </h3>
				<br />
				<div className="enter-buttons">
					<button className="btn btn-success" onClick={() => history.push('/HomePage')}>
						Yes I am
					</button> 
					      {space}
					<button className="btn btn-danger"  onClick={() => history.push('/UnderPage')}>No I'm not</button>
				</div>
			</div>
		</div>
	);
}
export default EnterPage;
