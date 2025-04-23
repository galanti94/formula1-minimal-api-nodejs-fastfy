# 🏎️ Formula 1 Minimal API

A minimal and fast RESTful API to serve Formula 1 data, including teams and drivers. Built with [Fastify](https://fastify.dev/) and CORS enabled.

## 🚀 Features

- List all F1 teams
- List all F1 drivers
- Get a specific team by ID
- Get a specific driver by ID

## 🛠️ Tech Stack

- [Fastify](https://www.fastify.io/)
- [@fastify/cors](https://github.com/fastify/fastify-cors)
- TypeScript (with interfaces for route params)

## 📦 Installation

```bash
npm install
```

## ▶️ Run the Server

```bash
PORT=3000 node src/index.js
```

> Replace `3000` with the desired port if needed.

## 📚 API Endpoints

### 🔹 Teams

- `GET /teams`  
  Returns the full list of teams.

- `GET /teams/:id`  
  Returns the team with the given `id`.

### 🔸 Drivers

- `GET /drivers`  
  Returns the full list of drivers.

- `GET /drivers/:id`  
  Returns the driver with the given `id`.

## 📄 Example Response

### GET `/teams/1`

```json
{
  "id": 1,
  "name": "Red Bull Racing",
  "country": "Austria"
}
```

### GET `/drivers/1`

```json
{
  "id": 1,
  "name": "Max Verstappen",
  "team": "Red Bull Racing"
}
```

## 🧪 Status Codes

- `200 OK` – Success
- `404 Not Found` – Driver or Team not found

## ✍️ Author

Made with ❤️ by Guilherme Galanti