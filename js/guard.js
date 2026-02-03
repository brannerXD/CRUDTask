import { getUser } from "./auth.js";

export function onlyUser() {
  const user = getUser();
  if (!user || user.role !== "user") {
    window.location.href = "index.html";
  }
}

export function onlyAdmin() {
  const user = getUser();
  if (!user || user.role !== "admin") {
    window.location.href = "index.html";
  }
}