import {connect} from "react-redux";

export const withStorePeople = (WrappedComponent, mapDispatchToProps = null) => {
	return connect(state => ({
		people: state.people
	}), mapDispatchToProps)(WrappedComponent);
};