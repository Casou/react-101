export async function getAllPeople() {
  const response = await fetch('/api/people');
  return await response.json();
}

export async function updatePerson(person) {
  const response = await fetch(`/api/people/${person.id}`, {
    method: 'PATCH',
    body: JSON.stringify(person),
    headers: { 'Content-Type': 'application/json' }
  });
  return await response.json();
}
