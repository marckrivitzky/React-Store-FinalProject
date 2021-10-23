import React from "react";
import { GiFlowerPot } from 'react-icons/gi'


function Title(){
const flower = <GiFlowerPot size={60} />
	return(
		<div className="header">
			<br />
			<h1>{flower} WEED LIKE 2 HELP {flower}</h1>
			


		</div>
	);
}

export default Title;