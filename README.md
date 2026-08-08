# 📝 Full-Stack MERN Notes Application

A modern, production-style Notes Application built with the MERN stack (MongoDB, Express.js, React, Node.js), Tailwind CSS v4, and Lucide Icons. Designed with an enterprise-grade backend architecture, modular component structure, clean REST APIs, and a sleek Light/Dark theme-ready UI.

## ✨ Features

- **Full CRUD Operations**: Create, view, update, and delete notes seamlessly.
- **Modern UI & UX**: Clean interface styled with Tailwind CSS v4 and Lucide icons.
- **Light / Dark Theme Ready**: Theme toggle can be stored in `localStorage` for persistent preferences.
- **Clean MVC Backend Architecture**: Express server organized into Models, Controllers, Routes, and Utility layers.
- **Database Integration**: Managed with Mongoose schemas and MongoDB.
- **Async Error Handling**: Centralized async wrapper for controllers.
- **Responsive Layout**: Works across mobile, tablet, and desktop screens.

## 🛠️ Tech Stack

### Frontend

- **Framework**: React + Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **HTTP Client**: Axios

### Backend

- **Runtime**: Node.js
- **Framework**: Express.js (ES Modules)
- **Database**: MongoDB Atlas / MongoDB
- **ODM**: Mongoose
- **Dev Utilities**: Nodemon, dotenv, CORS

## 📁 Project Structure

```
notes_api/
│
├── backend/
│   ├── src/
│   │   ├── controllers/     # Business logic handlers (note.controller.js)
│   │   ├── db/              # MongoDB connection logic (db/index.js)
│   │   ├── models/          # Mongoose schema definitions (note.model.js)
│   │   ├── routes/          # REST API endpoints (note.routes.js)
│   │   ├── utils/           # Helper functions & async handlers (asyncHandler.js)
│   │   ├── app.js           # Express app configuration & middleware
│   │   └── index.js         # Backend entry point & server initialization
│   ├── .env                 # Environment variables (git-ignored)
│   ├── .gitignore           # Git ignore patterns for backend
│   └── package.json         # Backend dependencies & scripts
│
├── frontend/
│   ├── src/
│   │   ├── components/      # UI Components (NoteCard, NoteForm, NotesList)
│   │   ├── services/        # Axios API instance configuration (api.js)
│   │   ├── App.jsx          # Main App shell & theme state management
│   │   ├── index.css        # Tailwind imports & styling
│   │   └── main.jsx         # React DOM entry point
│   ├── vite.config.js       # Vite configuration with Tailwind plugin
│   ├── package.json         # Frontend dependencies & scripts
│   └── index.html           # HTML entry shell
│
└── README.md                # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)
- [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas) or local MongoDB

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/notes_api.git
cd notes_api
```

### 2. Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in `backend/` with:

```env
PORT=5000
MONGODB_URI=mongodb+srv://<your_user>:<your_password>@cluster0.xxx.mongodb.net
```

4. Run the development server:

```bash
npm run dev
```

*Expected output:*

```plaintext
⚙️ Server is running at port: 5000
MongoDB Connected! DB HOST: cluster0-shard-00-00.xxxx.mongodb.net
```

### 3. Frontend Setup

1. Open a new terminal window and navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the Vite development server:

```bash
npm run dev
```

*Expected output:*

```plaintext
➜ Local: http://localhost:5173/
```

4. Open `http://localhost:5173/` in your browser.

> Note: The backend API defaults to port `5000`. If your frontend uses a different port in `frontend/src/services/api.js`, update the `baseURL` accordingly.

## 📡 API Reference

**Base URL**: `http://localhost:5000/api/v1`

| Method | Endpoint | Description | Request Body Example |
| --- | --- | --- | --- |
| GET | `/notes` | Fetch all notes (sorted newest first) | N/A |
| POST | `/notes` | Create a new note | `{ "title": "Demo Note", "content": "Details here...", "category": "Work" }` |
| PUT | `/notes/:id` | Update an existing note by ID | `{ "title": "Updated Title", "content": "Updated details..." }` |
| DELETE | `/notes/:id` | Delete a note by ID | N/A |

## 📸 Screenshots

*(Optionally replace these placeholders with your actual app screenshots!)*

**Light Mode**

![Light Mode Screenshot](./screenshots/light-mode.png)

**Dark Mode**

![Dark Mode Screenshot](./screenshots/dark-mode.png)

## 🔒 Environment Variables & Security

Make sure your `backend/.env` file is included inside `backend/.gitignore` to keep your MongoDB URI and credentials out of source control.

```gitignore
# backend/.gitignore
node_modules/
.env
```

## 📜 License

Distributed under the MIT License.
