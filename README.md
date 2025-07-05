# React To-Do App

A simple and modern To-Do application built with React and a Node.js/Express + MongoDB backend.  
Add, complete, and delete your tasks with a clean UI. Your todos are now stored in a real database!

---

## Features

- ✅ Add new todos
- ✅ Mark todos as completed (with strikethrough)
- ✅ Delete todos
- ✅ Persistent storage with MongoDB database
- ✅ RESTful API backend (Express)
- ✅ Responsive and clean UI

---

## Screenshots

![Screenshot](screenshot.png) <!-- Add your screenshot file if available -->

---

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm
- MongoDB (local or Atlas)

---

### Installation

#### 1. **Clone the repository:**
```sh
git clone https://github.com/your-username/react-todo-app.git
cd react-todo-app
```

#### 2. **Backend Setup**
```sh
cd backend
npm install
```
- Make sure MongoDB is running locally (default: `mongodb://localhost:27017/todo_db`).
- Start the backend server:
  ```sh
  node index.js
  ```
  The backend runs on [http://localhost:3000](http://localhost:3000) by default.

#### 3. **Frontend Setup**
```sh
cd ../frontend
npm install
npm start
```
- The frontend runs on [http://localhost:5173](http://localhost:5173).


## Project Structure

```
backend/
  models/
    Todo.model.js
  config/
    db.js
  index.js

frontend/
  src/
    components/
      AddTodo.jsx
      TodoList.jsx
      TodoItem.jsx
    App.jsx
    App.css
    index.js
```

---

## API Endpoints

- `GET    /todos`         — Get all todos
- `POST   /todos`         — Add a new todo (`{ text }`)
- `PATCH  /todos/:id`     — Update a todo (`{ completed }`)
- `DELETE /todos/:id`     — Delete a todo

---

## Customization

- Edit styles in `App.css` and component CSS files for a personalized look.
- Add new features like editing todos, filtering, or bulk actions as you learn more!

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

Made with ❤️ using React, Node.js, and MongoDB.  
Follow my journey on [Your Website](https://your-website.com)
