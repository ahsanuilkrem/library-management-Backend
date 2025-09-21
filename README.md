
# 📚 Library Management API

A RESTful API for managing a library system, built with **Express.js**, **TypeScript**, and **MongoDB** using **Mongoose**.

This application supports full CRUD operations for books, borrowing functionality with stock validation, aggregation summaries, filtering, and business logic enforcement using Mongoose statics, middleware, and validation.

---

## 🚀 Features

### ✅ Book Management

* 📘 **Create Book** with validation
* 🔍 **Get All Books** with filtering, sorting & pagination
* 📖 **Get Book by ID**
* ✏️ **Update Book** (e.g., update copies)
* ❌ **Delete Book**

### 🔄 Borrowing System

* 📦 **Borrow a Book**:

  * Checks for available stock
  * Deducts stock
  * Updates book availability
  * Uses Mongoose **instance method** and **middleware**

* 📊 **Borrow Summary Report** (Aggregation Pipeline):

  * Group by book
  * Total quantity borrowed
  * Return book title & ISBN

### 🛠️ Mongoose Features Used

* Schema validation
* Custom error handling
* Middleware: `pre`, `post`
* Instance method (`updateAvailability`)
* Aggregation pipeline
* Reference population

---

## 🧪 API Endpoints

### 📘 Books

| Method | Endpoint             | Description                |
| ------ | -------------------- | -------------------------- |
| POST   | `/api/books`         | Create a new book          |
| GET    | `/api/books`         | Get all books with filters |
| GET    | `/api/books/:bookId` | Get a book by ID           |
| PUT    | `/api/books/:bookId` | Update book (e.g., copies) |
| DELETE | `/api/books/:bookId` | Delete a book              |

#### Query Parameters (GET `/api/books`)

| Param    | Description       |
| -------- | ----------------- |
| `filter` | Filter by genre   |
| `sortBy` | Field to sort by  |
| `sort`   | `asc` or `desc`   |
| `limit`  | Number of results |

---

### 📦 Borrowing

| Method | Endpoint      | Description                      |
| ------ | ------------- | -------------------------------- |
| POST   | `/api/borrow` | Borrow a book                    |
| GET    | `/api/borrow` | Summary report of borrowed books |

---

## ⚙️ Technology Stack

* 🧰 **Backend**: Express.js + TypeScript
* 🛢️ **Database**: MongoDB with Mongoose
* 📦 **Package Manager**: npm
* 🧪 **Testing Tool**: Postman / Thunder Client
* 🌐 **API Format**: RESTful JSON

---

## 📁 Project Structure

```
src/
├── config/              # MongoDB and environment configuration
│   └── env.ts
│
├── errorHelpers/        # Centralized error formatting and classes
│   ├── ApiError.ts
│
├── helpers/
│   ├── handleCastError.ts        
│   ├── handlerDuplicatError.ts
│   ├── handlerValidationError.ts
│   └── handlerzodEror.ts
│
├── interfaces/          # TypeScript interfaces and types
│    └── errro.types.ts
│
├── middlewares/       # Error handlers, custom middleware
│   ├── globalErroHandler.ts
│   └── notFound.ts
|
├──models/
|   ├── book/
|   ├── borrow/
|   └── stats/          
|  
├── routes/
|   └── index.ts     
|
├── utils/ 
|   ├── catchAsyncts.ts
|   └── sendRespone.ts 
|           
├── app.ts             # Express app setup
└── server.ts          # Server startup script
```

---

## 🧑‍💻 Getting Started

### 🔧 Prerequisites

* [Node.js](https://nodejs.org/) (v18+ recommended)
* [MongoDB](https://www.mongodb.com/)
* npm or yarn

---

### 📥 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/library-management-api.git
cd library-management-api

# Install dependencies
npm install


### ✏️ `.env` Configuration

```
PORT=5000
MONGO_URI=mongodb://localhost:27017/library
```

---

### 🏃‍♂️ Run the Project

#### Development (with hot reload)

```bash
npm run dev
```

#### Production Build

```bash
npm run build
npm start
```

---

## 🧪 API Testing

Use **Postman**, **Insomnia**, or **Thunder Client** to test the endpoints.
Sample `POST` JSON for creating a book:

```json
{
  "title": "The Theory of Everything",
  "author": "Stephen Hawking",
  "genre": "SCIENCE",
  "isbn": "9780553380163",
  "description": "An overview of cosmology and black holes.",
  "copies": 5,
  "available": true
}
```

---

## 📌 Error Response Format

All errors follow this structure:

```json
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": {
      "copies": {
        "message": "Copies must be a positive number"
      }
    }
  }
}
```

---

## 🧠 Author

**Md Ahsan**
GitHub: https://github.com/ahsanuilkrem
Email: ahsanulkarim429@gmail.com


 