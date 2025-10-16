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


🛠️ License

This project is licensed under the MIT License — feel free to use and modify it for your own projects.
