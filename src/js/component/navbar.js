import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "../../styles/navbar.css";
import { Button } from "react-bootstrap";
import { Context } from "../store/appContext"
import getState from "../store/flux";
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span ><img id="topLeftLogo" src="https://www.pngitem.com/pimgs/m/21-210302_star-wars-logo-png-star-wars-logo-icon.png" /></span>
			</Link>
			<Dropdown>
				<Dropdown.Toggle className="toggle" variant="warning" id="dropdown-basic" size="md">
					Dropdown Button
				</Dropdown.Toggle>
				<Dropdown.Menu>
					{store.favorites.length > 0 ? (
						store.favorites.map((favorite, i) => (
							<Dropdown.Item href="#/action-1" key={i}>
							{favorite}
								<Button className="trash" variant="danger" onClick= {() => actions.favoritesInfo(favorite, i)}>
									<i className="fas fa-trash-alt" />
								</Button>
							</Dropdown.Item>
						))
					) : (
						<DropdownItem>No favorites</DropdownItem>
					)}
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};

