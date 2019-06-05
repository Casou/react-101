import {connect} from "react-redux";

export const withStorePeople = (WrappedComponent) => {
	return connect(state => ({
		people: state.people
	}), null)(WrappedComponent);
};