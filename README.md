# 📝 To-Do API — Full Stack

A full-stack REST API for task management, featuring database persistence and a simple frontend interface for interacting with the API endpoints.

## Purpose

This project was built to practice backend development with **TypeScript**, relational database integration, and REST API consumption through a basic frontend application.

## Features

* Create tasks
* Retrieve all tasks
* Retrieve a task by ID
* Update existing tasks
* Mark tasks as completed
* Delete tasks
* Persistent data storage using a relational database

## Technologies

### Backend

* Node.js
* Express
* TypeScript
* TypeORM
* MariaDB

### Frontend

* HTML
* CSS
* JavaScript

## Project Structure

```text
src/
├── controllers/
├── entities/
├── routes/
├── database/
└── server.ts

public/
├── index.html
├── style.css
└── script.js
```

## API Endpoints

### `GET /tasks`

Returns all tasks.

### `GET /tasks/:id`

Returns a specific task by its ID.

### `POST /tasks`

Creates a new task.

### `PUT /tasks/:id`

Updates an existing task.

### `DELETE /tasks/:id`

Deletes a task.

## Database

The project uses **MariaDB** with **TypeORM** for data persistence.

Database connection settings are configured in the `data-source.ts` file.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/pabsgoodev/ToDoList-3.0.git
cd ToDoList-3.0
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## Notes

* Built for learning purposes and portfolio projects.
* Simple and maintainable project structure.
* Easily extensible with additional modules and features.

## Future Improvements

* User authentication (JWT)
* Task categories
* Due dates
* Task priorities
* Pagination and filtering
* Unit and integration tests
* Docker support

## Project Status

* **Type:** Full Stack
* **Purpose:** Portfolio / Learning
* **Status:** Functional
