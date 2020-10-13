export const people = (state = [], action) => {
  const newState = {...state};
  switch (action.type) {
    case "ALL_PEOPLE":
      newState.people = action.payload;
      break;
    case "UPDATE_PERSON":
      newState.people = [ ...newState.people.filter(p => p.id !== action.payload.id), action.payload ];
      break;
    default:
      break;
  }
  return newState;
};