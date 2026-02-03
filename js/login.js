import { loginUser } from "./auth.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  const user = await loginUser(email, password);

  if (user) {
    if (user.role === "admin") {
      window.location.href = "../admin.html";
    } else {
      window.location.href = "../tasks.html";
    }
  } else {
    alert("Invalid information, please try again");
  }
});