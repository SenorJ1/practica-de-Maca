import React from "react";
import { Navbar } from "./navbar.jsx";
import {Accordion} from "./Accordion.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//los componentes son funciones que retornan html
//todas funciones retornan un valor
//create your first component
const Home = () => {
	return (
	
		<div className="text-center">
			<Navbar/>
			<Accordion/>
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			
		</div>
	);
};

export default Home;
