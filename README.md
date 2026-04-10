# 📝 Notes App (Full Stack)

A full-stack Notes Application with authentication and CRUD functionality, built using Node.js, Express, MongoDB Atlas, and Vanilla JavaScript.

---

## 🌐 Live Demo

* 🔗 Frontend: https://notesapp-krushnataur.vercel.app
* 🔗 Backend API: https://notes-app-backend-m0wy.onrender.com

---

## 🚀 Features

* 🔐 User Authentication (Signup & Login with JWT)
* 🛡️ Protected Routes (Backend + Frontend)
* 📝 Create Notes
* 📄 Read Notes (User-specific)
* ✏️ Update Notes
* ❌ Delete Notes
* 👤 Logged-in User Display
* 🔓 Logout Functionality

---

## 🛠️ Tech Stack

**Frontend**

* HTML
* CSS
* JavaScript (Vanilla JS)

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB Atlas (Cloud)

---

## 📂 Project Structure

```
mern-notes-app-basic/
│
├── backend/
│   ├── models/
│   ├── controllers/
│   ├── routes/
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

## ⚙️ Local Setup

### 1. Clone Repository

```
git clone https://github.com/KrushnaTaur/mern-notes-app-basic.git
cd mern-notes-app-basic
```

---

### 2. Setup Backend

```
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run server:

```
npm run dev
```

---

### 3. Run Frontend

* Open `frontend/index.html` using Live Server

---

## 🔑 API Endpoints

### Authentication

* POST `/api/auth/signup`
* POST `/api/auth/login`

### Notes

* GET `/api/notes`
* POST `/api/notes`
* PUT `/api/notes/:id`
* DELETE `/api/notes/:id`

---

## 🧪 Usage

1. Create an account (Signup)
2. Login securely
3. Add, edit, and delete notes
4. Data is stored per user

---

## 🚀 Deployment

* Backend deployed on Render
* Frontend deployed on Vercel

