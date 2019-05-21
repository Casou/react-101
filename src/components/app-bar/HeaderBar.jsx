import React from 'react';

import './HeaderBar.css';
import { Toolbar, AppBar } from "@material-ui/core";

const HeaderBar = () => {
	return (
		<AppBar position="static" classes={{ root : "HeaderBar"}}>
			<Toolbar>
				Proxiad
			</Toolbar>
		</AppBar>
	);
};

export default HeaderBar;