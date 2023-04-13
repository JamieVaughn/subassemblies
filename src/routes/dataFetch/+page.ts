export const load = async ({data, fetch}) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  return {
    data: 42,
    users
  }
}