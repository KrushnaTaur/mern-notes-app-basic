const user = JSON.parse(localStorage.getItem("user"));

if (user) {
  document.getElementById("userInfo").innerText = `Welcome, ${user.name} 👋`;
}

// Check if user logged in
const token = localStorage.getItem("token");

if (!token) {
  alert("Please login first");
  window.location.href = "index.html";
}

const API_URL = "http://localhost:5000/api/notes";

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
    const li = document.createElement("li");
    li.innerHTML = `
      <b>${note.title}</b>: ${note.content}
      <button onclick="editNote('${note._id}', '${note.title}', '${note.content}')">Edit</button>
      <button onclick="deleteNote('${note._id}')">Delete</button>
    `;
    list.appendChild(li);
  });
}



// Add note
document.getElementById("noteForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (editId) {
    // UPDATE
    await fetch(`${API_URL}/${editId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title, content })
    });

    editId = null; // reset
  } else {
    // CREATE
    await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ title, content })
    });
  }

  // Clear form
  document.getElementById("title").value = "";
  document.getElementById("content").value = "";

  fetchNotes();
});

let editId = null;

function editNote(id, title, content) {
  document.getElementById("title").value = title;
  document.getElementById("content").value = content;

  editId = id; // store id
}

// Delete note
async function deleteNote(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  fetchNotes();
}

// Load notes
fetchNotes();

function logout() {
  // Remove token
  localStorage.removeItem("token");

  // Redirect to login page
  window.location.href = "index.html";
}