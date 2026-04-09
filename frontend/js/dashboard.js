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

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ title, content })
  });

  fetchNotes();
});

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