export const fetchPeople = () => (dispatch) => {
    return fetch("/api/people")
        .then(r => r.json())
        .then(people => dispatch({ type: "ALL_PEOPLE", payload: people }));
};

export const updatePerson = person => dispatch => {
    return fetch(`/api/people/${person.id}`, {
        method: 'PATCH',
        body: JSON.stringify(person),
        headers: { 'Content-Type': 'application/json' }
    }).then(() => dispatch({ type: "UPDATE_PERSON", payload: person }));
};
