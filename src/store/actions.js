export const fetchPeople = () => (dispatch) => {
    return fetch("/api/people")
        .then(r => r.json())
        .then(people => dispatch({ type: "ALL_PEOPLE", payload: people }));
};
