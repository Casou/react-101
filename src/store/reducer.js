export const people = (state = [], action) => {
    const newState = { ...state };
    switch(action.type) {
        case "ALL_PEOPLE":
            newState.people = action.payload;
        default: 
            break;
    }
    return newState;
};