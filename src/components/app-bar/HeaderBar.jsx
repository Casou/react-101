import React from 'react';

import './HeaderBar.css';
import { Toolbar, AppBar } from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import Clock from "./Clock";
import useWindowsWidth from "../hooks/useWindowDimensions";

const HeaderBar = () => {
	const { height, width } = useWindowsWidth();
	return (
		<AppBar position="static" classes={{ root : "HeaderBar"}}>
			<Toolbar>
				<h1>
					<img src={"/resources/images/logo.png"} alt={"Atecna"} />
				</h1>

				<nav>
					<NavLink to={"/"} exact>Collaborateurs</NavLink>
					<NavLink to={"/random"}>Random</NavLink>
				</nav>
			</Toolbar>

			<div id={"dimensions"}>{ width } x { height }</div>
			<div id={"timer"}><Clock /></div>
		</AppBar>
	);
};

export default HeaderBar;