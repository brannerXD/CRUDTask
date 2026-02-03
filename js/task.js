    import { onlyUser } from "./js/guards.js";
    import { getUser, logout } from "./js/auth.js";

    onlyUser();

    window.logout = logout;

    const user = getUser();

    async function loadTasks() {
    const res = await fetch(`http://localhost:3000/tasks?userId=${user.id}`);
    const data = await res.json();

    tasks.innerHTML = data.map(t => `<p>${t.title}</p>`).join("");
    }

    loadTasks();