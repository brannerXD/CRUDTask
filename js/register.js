import { registerUser } from "./auth.js";

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const confirmpassword = document.querySelector('#confirmpassword').value;

  await registerUser({
    name,
    email,
    password,
    confirmpassword,
    role: "user"
  });

  alert("Registred");
  window.location.href = "../login.html";
});