import React from 'react';

import './HeaderBar.css';
import { Toolbar, AppBar } from "@material-ui/core";

const HeaderBar = () => {
	return (
		<AppBar position="static" classes={{ root : "HeaderBar"}}>
			<Toolbar>
				<h1>
					<img src={"/resources/images/logo.png"} alt={"Atecna"} />
				</h1>
			</Toolbar>
		</AppBar>
	);
};

export default HeaderBar;