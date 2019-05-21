import React from 'react';

import './HeaderBar.css';
import { Toolbar, AppBar } from "@material-ui/core";
import {NavLink} from "react-router-dom";

const HeaderBar = () => {
	return (
		<AppBar position="static" classes={{ root : "HeaderBar"}}>
			<Toolbar>
				<h1>
					Proxiad
				</h1>

				<nav>
					<NavLink to={"/list"}>List all</NavLink>
					<NavLink to={"/filter"}>Filter</NavLink>
				</nav>
			</Toolbar>
		</AppBar>
	);
};

export default HeaderBar;