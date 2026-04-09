# 📝 MERN Notes App (Basic)

A simple full-stack Notes Application with Authentication using Node.js, Express, MongoDB Atlas, and Vanilla JavaScript.

---

## 🚀 Features

* 🔐 User Signup & Login (JWT Authentication)
* 🛡️ Protected Dashboard Route
* 📝 Create Notes
* 📄 View Notes
* ❌ Delete Notes
* 💾 Data stored in MongoDB Atlas (Cloud)

---

## 🛠️ Tech Stack

### Frontend:

* HTML
* CSS
* JavaScript (Vanilla JS)

### Backend:

* Node.js
* Express.js

### Database:

* MongoDB Atlas

---

## 📂 Project Structure

```
mern-notes-app-basic/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── frontend/
│   ├── css/
│   ├── js/
│   ├── index.html
│   ├── signup.html
│   └── dashboard.html
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

```
git clone https://github.com/KrushnaTaur/mern-notes-app-basic.git
cd mern-notes-app-basic
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
```

Create a `.env` file inside backend folder:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend server:

```
npm run dev
```

---

### 3️⃣ Run Frontend

* Open `frontend/index.html` using Live Server (VS Code extension)

---

## 🔑 API Endpoints

### 🔐 Authentication

* POST `/api/auth/signup`
* POST `/api/auth/login`

### 📝 Notes

* GET `/api/notes`
* POST `/api/notes`
* PUT `/api/notes/:id`
* DELETE `/api/notes/:id`

---

## 🧪 How to Use

1. Signup a new account
2. Login with your credentials
3. Add notes
4. View all notes
5. Delete notes

---

## 🚀 Future Improvements

* ✏️ Update Notes feature
* 🔓 Logout functionality
* 🎨 Better UI (cards, styling)
* ⚛️ Convert frontend to React
* 🌐 Deploy project (Render + Netlify)

---

## 👨‍💻 Author

**Krushna Taur**

AI & DS Student 🚀

Building real-world projects step by step

---
