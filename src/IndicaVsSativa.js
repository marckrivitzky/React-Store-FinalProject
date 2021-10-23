import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";
import BottomPage from "./BottomPage";

function IndicaVsSativa(){

	return(
		<div className="page-two-container">
			<Title />
			<Navbar />		
			<br />
			<div class="container">
			<h2>Indica vs Sativa</h2>
			  <div class="row">
			    <div class="col">
					<div className="Indica">
						<br />
						<p className="description">
							<h4>What is Indica</h4>
							<p>Not all indica strains will put you “in da couch,” but nevertheless, many consumers associate indicas with full-body effects, for example, heavy limbs or a tingly face. They also report indicas as being helpful in aiding relaxation and curbing insomnia. Overall indica is associated more with the night time.</p>
							<h4>Effects</h4>
							<p>Common effects associated with indica strains include feeling relaxed, euphoric, happy, and sleepy. Indicas are commonly known as “nighttime” strains, used for relaxing and unwinding at the end of the night.</p>
			
							<h4>Popular Indica strains</h4>
							<ul>
							<li>Purple Punch</li>
							<li>Granddaddy Purple</li>
							<li>White Rhino</li>
							<li>Bubba Kush</li>
							<li>Northern Lights</li>
							<li>Blueberry</li>
							<li>Grape Ape</li>
							<li>Blue Cheese</li>
							</ul>
						</p>
						<img src="https://images.leafly.com/flower-images/defaults/short-dense-heavy/strain-1.png" width="200px" alt="indicaPic"/>
					</div>
					<br />
			    </div>

			    <div class="col">
			      	<div className="Sativa">
						<br />
						<p className="description">
							<h4>What is Sativa</h4>
							<p>While not all sativa marijuana strains will energize you, most consumers notice a tendency for sativas to produce a “head high,” an uplifting, stimulating effect. They also often report sativas as being helpful in mitigating stress or anxiety, and many consumers enjoy sativas to sharpen focus and boost creativity/motivation.</p>
							<h4>Effects</h4>
						
							<p>Common effects associated with sativa strains include feeling happy, uplifting, euphoric, and energetic. Sativas are often thought of as “daytime” strains, used for feeling productive, creative, and focused, and for getting chores done.</p>
			
							<h4>Popular sativa strains</h4>
							<ul>
							<li>Sour Diesel</li>
							<li>Jack Herer</li>
							<li>Green Crack</li>
							<li>Durban Poison</li>
							<li>Strawberry Cough</li>
							<li>Amnesia Haze</li>
							<li>Super Lemon Haze</li>
							<li>Super Silver Haze</li>
							</ul>
						</p>
						<img src="https://weedmaps.com/news/wp-content/uploads/2020/08/171207_45517_JackHerer_SAF_1-1-768x1024.jpg" width="150px" alt="sativaPic"/>
					</div>
					<br />
			    </div>
	
			  </div>
			</div>
		<BottomPage />
</div>
	);
}

export default IndicaVsSativa;