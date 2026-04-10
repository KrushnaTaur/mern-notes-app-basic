const token = localStorage.getItem("token");

// Protect route
if (!token) {
  alert("Please login first");
  window.location.href = "index.html";
}

// Show user
const user = JSON.parse(localStorage.getItem("user"));
if (user) {
  document.getElementById("userInfo").innerText = `Welcome, ${user.name} 👋`;
}

const API_URL = "http://localhost:5000/api/notes";

let editId = null;

// Fetch notes
async function fetchNotes() {
  const res = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const notes = await res.json();

  const list = document.getElementById("notesList");
  list.innerHTML = "";

  notes.forEach(note => {
    const div = document.createElement("div");
    div.classList.add("note-card");

    div.innerHTML = `
      <h4>${note.title}</h4>
      <p>${note.content}</p>
      <button onclick="editNote('${note._id}', '${note.title}', '${note.content}')">Edit</button>
      <button onclick="deleteNote('${note._id}')">Delete</button>
    `;

    list.appendChild(div);
  });
}

// Add / Update note
document.getElementById("noteForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (editId) {
    await fetch(`${API_URL}/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title, content })
    });

    editId = null;
  } else {
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title, content })
    });
  }

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";

  fetchNotes();
});

// Edit
function editNote(id, title, content) {
  document.getElementById("title").value = title;
  document.getElementById("content").value = content;
  editId = id;
}

// Delete
async function deleteNote(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  fetchNotes();
}

// Logout
function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  window.location.href = "index.html";
}

// Load notes
fetchNotes();