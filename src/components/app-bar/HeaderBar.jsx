import React from 'react';

import './HeaderBar.css';
import {AppBar, Toolbar} from "@material-ui/core";
import {NavLink} from 'react-router-dom';
import withClock from "../hoc/withClock";

const HeaderBar = ({ clock }) => {
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

			<div id={"timer"}>{ clock.toLocaleTimeString() }</div>
		</AppBar>
	);
};

export default withClock(HeaderBar);