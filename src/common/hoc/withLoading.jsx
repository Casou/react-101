import {connect} from "react-redux";
import Loader from "../components/Loader";
import React from "react";

// Simple solution: the component is already connected to the store
// ==> We can use the wrapped component own props
const withLoading = (WrappedComponent) => ({ recipes, ...props }) => {
  if (!recipes) {
    return <Loader/>;
  }
  return <WrappedComponent {...props} recipes={recipes} />
};

// // More complex solution: the wrapped component is not connected to the store
// // so we need to connect the HOC
// const mapStateToProps = (store) => ({
//   r: store.recipes,
// });
//
// const withLoading = (WrappedComponent) => {
//   const Loading = ({r, ...props}) => {
//     if (!r) {
//       return <Loader/>;
//     }
//     return <WrappedComponent {...props} recipes={r} />
//   };
//
//   return connect(mapStateToProps)(Loading);
// };

export default withLoading;
