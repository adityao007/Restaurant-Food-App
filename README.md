# 🍽️ Restaurant Food App (Node.js + Express + MongoDB)

A complete **backend API** for a restaurant food ordering and management system built using **Node.js**, **Express**, and **MongoDB**.  
This project handles user authentication, restaurant and food management, and category organization — serving as the backend foundation for a full-stack restaurant application.

---

## 🚀 Features

- 🔐 **JWT Authentication** – Secure login & registration system  
- 👥 **Role-based Access** – Admin and User permissions  
- 🍴 **Restaurant Management** – CRUD operations for restaurants  
- 🍕 **Food Management** – Add, update, and fetch menu items  
- 🗂️ **Category Management** – Organize food by categories  
- 🌐 **CORS Enabled** – For frontend communication  
- ⚙️ **Environment Variables** – Managed using dotenv  
- 🧾 **Logging** – HTTP request logging with Morgan  
- 🧩 **Clean Folder Structure** – Organized controllers, models, and routes  

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Database** | MongoDB (via Mongoose) |
| **Authentication** | JWT (jsonwebtoken) |
| **Security** | bcryptjs |
| **Middleware Tools** | Morgan, CORS, dotenv |
| **Development Tool** | Nodemon |

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/restaurant-food-app.git
cd restaurant-food-app
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Create Environment Variables
Create a `.env` file in the root directory and add:
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=8080
```

### 4️⃣ Run the Server

**Development Mode (auto restart on file change):**
```bash
npm run server
```

**Production Mode:**
```bash
npm start
```

Your backend will start at 👉 [http://localhost:8080](http://localhost:8080)

---

## 📁 Folder Structure
```
.
├── config/
│   └── db.js                 # MongoDB connection setup
├── controllers/              # Logic for each route
├── models/                   # Mongoose models (User, Food, Category, etc.)
├── routes/                   # Route definitions
├── middlewares/              # Authentication, role checks, etc.
├── server.js                 # Main entry point
├── package.json              # Dependencies and scripts
└── .env                      # Environment variables (excluded from git)
```

---

## 🧾 Example API Routes

| Endpoint | Method | Description |
|-----------|--------|-------------|
| `/api/v1/auth/register` | POST | Register a new user |
| `/api/v1/auth/login` | POST | Login existing user |
| `/api/v1/user/resetpassword` | PUT | Reset user password |
| `/api/v1/resturants/create` | POST | Create new restaurant |
| `/api/v1/resturants/getAll` | GET | Get all restaurants |
| `/api/v1/category/create` | POST | Create new category |
| `/api/v1/category/getAll` | GET | Fetch all categories |
| `/api/v1/food/create` | POST | Add food item |
| `/api/v1/food/getAll` | GET | Get all food items |





## 🔒 Environment Variables

| Variable | Description |
|-----------|-------------|
| `MONGO_URI` | MongoDB Connection String |
| `JWT_SECRET` | Secret key for signing JWT tokens |
| `PORT` | Port on which the app runs (default: 8080) |

---

## 💡 Common Commands

| Command | Description |
|----------|-------------|
| `npm install` | Install all dependencies |
| `npm start` | Start the app in production mode |
| `npm run server` | Start the app with Nodemon for development |
| `npm test` | Placeholder for test script |

---

## 🧰 Dependencies Overview

| Package | Purpose |
|----------|----------|
| **express** | Web framework for Node.js |
| **mongoose** | MongoDB object modeling |
| **jsonwebtoken** | User authentication |
| **bcryptjs** | Password hashing |
| **dotenv** | Environment variable handling |
| **cors** | Cross-origin request handling |
| **morgan** | Logging HTTP requests |
| **nodemon** | Auto-restart during development |


