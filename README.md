"# Personal-AI-assistant-" 

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v22-green?logo=node.js" alt="Node.js Badge">
  <img src="https://img.shields.io/badge/Express.js-v4-lightgrey?logo=express" alt="Express.js Badge">
  <img src="https://img.shields.io/badge/MongoDB-v7.0-brightgreen?logo=mongodb" alt="MongoDB Badge">
  <img src="https://img.shields.io/badge/OpenAI-API-blue?logo=openai" alt="OpenAI Badge">
  <img src="https://img.shields.io/badge/License-MIT-yellow?logo=open-source-initiative" alt="License Badge">
</p>
# 🤖 AI-PAM (AI Powered Assistant Manager)

AI-PAM is an **AI-powered personal assistant web app** that helps users manage tasks, store conversations, and interact with an intelligent chatbot powered by **OpenAI API**, built using **Node.js**, **Express**, and **MongoDB**.

---

## 🧠 Features

- 🤖 Chat with AI (OpenAI GPT integration)  
- 🗂️ Task and note management  
- 🗄️ MongoDB integration for persistent data  
- ⚙️ RESTful API with Express.js  
- 🔐 Secure environment configuration using dotenv  

---

## 🧩 Folder Structure

ai-pam/
│
├── client/ # Frontend (React, optional for later)
│
├── server/ # Backend
│ ├── server.js # Entry point
│ ├── .env # Environment variables
│ ├── package.json # Node dependencies
│ ├── ai/
│ │ └── openai.js # OpenAI setup
│ ├── config/
│ │ └── db.js # MongoDB connection
│ ├── models/
│ │ └── Chat.js # Chat Schema
│ └── routes/
│ └── chatRoutes.js # API routes
│
└── README.md # Documentation


---

## ⚙️ Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **AI Integration** | OpenAI API |
| **Environment Config** | dotenv |
| **Version Control** | Git, GitHub |

---

## 🚀 Getting Started

Follow these steps to set up the project on your local machine.

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/ai-pam.git
cd ai-pam

cd server

npm install express mongoose dotenv openai cors nodemon

mkdir ai config models routes

PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key


6️⃣ Connect MongoDB
🟢 Using MongoDB Atlas (Cloud)

Go to MongoDB Atlas
.

Create a free cluster.

Create a database user and whitelist your IP.

Copy your connection string and paste it in .env like:
MONGO_URI=mongodb+srv://aiuser:aipass123@cluster0.mongodb.net/ai-pam


OpenAI API Setup

Make sure you have an OpenAI API key from https://platform.openai.com
.

Update your ai/openai.js file with the correct syntax:

Run the Server
npx nodemon server.js

If successful, you’ll see:
MongoDB Connected
Server running on port 5000

API Test

Test your backend using:
http://localhost:5000/api/chat


You should see:
{"message": "AI-PAM Backend is running!"}


💡 Future Roadmap

 Build React frontend for user dashboard

 Add JWT-based authentication

 Integrate calendar + Gmail APIs

 Add voice command support

 Full deployment on Vercel/Render

🧑‍💻 Author

Atharv Raj Pandab
B.Tech CSE | Aspiring SDE | Full Stack Developer
📍 Chennai, India


🛠️ License

This project is licensed under the MIT License — feel free to use and modify it for your own projects.
