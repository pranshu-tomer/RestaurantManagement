export default async function apiRestaurantSignUp(formData) {
    console.log(formData)
    const response = await fetch('http://localhost:3000/api/v1/restaurant/register', {
      method: 'POST',
      body: formData,
      credentials: 'include',
    });
    return response
}

export default async function apiUserSignUp(formData) {
  console.log(formData)
  const response = await fetch('http://localhost:3000/api/v1/restaurant/register', {
    method: 'POST',
    body: formData,
    credentials: 'include',
  });
  return response
}