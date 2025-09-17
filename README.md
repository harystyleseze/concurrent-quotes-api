# Concurrent Quotes API

A Node.js API serving random quotes with simulated asynchronous delays and a clean MVC architecture. Designed to handle multiple concurrent requests efficiently and demonstrate Node.js’s non-blocking I/O model.

---

## 🚀 Features

- In-memory storage of quotes (acts as a mock database)
- Simulated random delay (0–2000ms) to mimic I/O operations (e.g., database queries)
- Clean MVC architecture (Model, Controller, Routes)
- Simple health check endpoint
- Lightweight and easy to extend

---

## 📁 Project Structure

```text
concurrent-quotes-api/
│
├── src/
│   ├── controllers/
│   │   └── quoteController.js
│   ├── models/
│   │   └── quoteModel.js
│   ├── routes/
│   │   └── quoteRoutes.js
│   └── app.js
│
├── server.js
├── package.json
└── README.md
```

---

## 🛠️ Prerequisites

- Node.js (v12 or newer recommended)
- npm (comes with Node.js)

---

## 💾 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/harystyleseze/concurrent-quotes-api.git
   cd concurrent-quotes-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

---

## 🔧 Running the Server

Start the server:

```bash
node server.js
```

By default, the server listens on port **3000**. You should see output similar to:

```
🚀 Server running at http://localhost:3000
```

---

## 🧩 How It Works

The API serves random quotes stored in memory and simulates asynchronous delays (0–2000ms) to mimic real-world I/O latency such as database queries. The project follows MVC architecture with separation of concerns between data (Model), business logic (Controller), and routing (Routes).

---

## 📡 API Endpoints

| Method | Route    | Description                                          |
| ------ | -------- | ---------------------------------------------------- |
| GET    | `/`      | Health check — returns a “server is running” message |
| GET    | `/quote` | Returns a random quote (after simulated delay)       |

---

## 🧪 Testing & Concurrent Requests

- **Manual Testing:** Use a browser or tools like Postman / Insomnia.
- **Load Testing:** On macOS/Linux (if you have Apache Benchmark installed), run:

  ```bash
  ab -n 100 -c 20 http://localhost:3000/quote
  ```

  This sends 100 requests with 20 concurrent connections to test how your API handles simultaneous calls with delays.

---

## 🔮 Future Improvements

- Use a real database (e.g., MongoDB, PostgreSQL) instead of in-memory storage
- Add endpoints for listing all quotes, filtering, or categorizing quotes
- Add request validation and error handling
- Add logging (e.g., using `morgan`)
- Add unit and integration tests (e.g., with Jest / Mocha / Supertest)
- Environment configuration using `.env` for ports and settings
- Containerization (Docker) and deployment

---

## 📄 License

This project is open-source and free for educational/demo use.
