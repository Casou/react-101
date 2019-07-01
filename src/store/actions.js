export async const fetchPeople = () => (dispatch) => {
    console.log("fetch");
    const response = await fetch("/api/people");
    return response.json();
};
