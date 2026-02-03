import { getUser, logout } from "./auth.js";

const user = getUser();

if (!user || user.role !== "user") {
    window.location.href = "../index.html";
}

document.querySelector("#logout").addEventListener("click", logout);
const API = "http://127.0.0.1:3000";
const container = document.querySelector("#tasks");

async function loadTasks() {
    const res = await fetch(`${API}/tasks?userId=${user.id}`);
    const data = await res.json();

    container.innerHTML = data.map(t => `
    <div>
        <p>${t.title} - ${t.status}</p>
        <button onclick="deleteTask(${t.id})">Eliminar</button>
    </div>
    `).join("");
}

loadTasks();

document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();

const title = document.querySelector("#title").value;

await fetch(`${API}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
    title,
    status: "pending",
    userId: user.id
    })
});

loadTasks();
});

window.deleteTask = async (id) => {
    await fetch(`${API}/tasks/${id}`, { method: "DELETE" });
    loadTasks();
};