import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/home.css";
import {Characters} from "./characters.js"
import {Planets} from "./planets.js"
import {Vehicles} from "./vehicles.js"

export const Home = () => {
	return (
	<div className="text-center mt-5">
		<h1>Character</h1>
		<div className = "scroll">
			<Characters />
		</div>
		<h1>Planets</h1>
		<div className = "scroll">
			<Planets />
		</div>
		<h1>Vehicles</h1>
		<div className = "scroll">
			<Vehicles />
		</div>
	</div> )
};
