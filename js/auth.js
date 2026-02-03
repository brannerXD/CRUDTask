const API = "http://localhost:3000";

export async function register(user) {
  await fetch(`${API}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
}

export async function login(email, password) {
  const res = await fetch(`${API}/users?email=${email}&password=${password}`);
  const data = await res.json();

  if (data.length) {
    sessionStorage.setItem("user", JSON.stringify(data[0]));
    return true;
  }
  return false;
}

export function getUser() {
  return JSON.parse(sessionStorage.getItem("user"));
}

export function logout() {
  sessionStorage.removeItem("user");
}