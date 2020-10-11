import React from 'react';

import './HeaderBar.css';
import { Toolbar, AppBar } from "@material-ui/core";
import { NavLink } from 'react-router-dom';

const HeaderBar = () => {
	return (
		<AppBar position="static" classes={{ root : "HeaderBar"}}>
			<Toolbar>
				<h1>
					<img src={"/resources/images/logo.png"} alt={"Atecna"} />
				</h1>

				<nav>
					Créer le menu ici
				</nav>
			</Toolbar>
		</AppBar>
	);
};

export default HeaderBar;