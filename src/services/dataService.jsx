export async function getUser(authDetail) {

  const bsid = sessionStorage.getItem("bsid");
  const token = sessionStorage.getItem("token")

  const requestOptions = {
    method: "GET",
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(authDetail)
  }

  const response = await fetch(`http://localhost:8000/users/${bsid}`, requestOptions)
  const data = await response.json()

  return data

}