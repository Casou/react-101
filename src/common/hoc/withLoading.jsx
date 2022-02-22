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

export default withLoading;
