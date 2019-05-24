import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import {connect} from "react-redux";

const Cra = ({ cra }) => {
	return (
		<Paper>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Rapport</TableCell>
						<TableCell>Client</TableCell>
						<TableCell align="right">Journées de travail</TableCell>
						<TableCell align="right">Frais</TableCell>
						<TableCell align="right">Statut</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{cra.sort((a, b) => b.id - a.id)
						.map(item => (
						<TableRow key={item.id}>
							<TableCell component="th" scope="row">{item.month} {item.year}</TableCell>
							<TableCell>{item.customer}</TableCell>
							<TableCell align="right">{item.workDays}</TableCell>
							<TableCell align="right">{item.fees} €</TableCell>
							<TableCell align="right">{item.status}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</Paper>
	);
};

Cra.propTypes = {
	cra: PropTypes.array.isRequired
};

export default connect(state => ({
	cra: state.cra
}), null)(Cra);