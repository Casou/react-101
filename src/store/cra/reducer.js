const cra = (state = {}, action) => {
  switch (action.type) {
    case "ALL_CRA_ITEMS":
      return action.payload;
    default :
      return state;
  }
};

export default cra;
