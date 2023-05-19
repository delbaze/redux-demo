export async function fetchUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
}
