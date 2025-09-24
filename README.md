# Blog App

A full-stack blog application built with the MERN stack (MongoDB, Express.js, React, Node.js) that allows users to create, read, update, and delete blog posts with image uploads.

![Blog App Screenshot](./screenshot.png)

## ✨ Features

- **📝 Create Posts**: Write blog posts with title, message, creator name, and tags
- **🖼️ Image Upload**: Upload and display images with your posts
- **✏️ Edit Posts**: Update existing posts with new content
- **🗑️ Delete Posts**: Remove posts you no longer need
- **👍 Like System**: Like and unlike posts
- **📱 Responsive Design**: Works seamlessly on desktop and mobile devices
- **🎨 Material-UI**: Modern and clean user interface
- **⚡ Real-time Updates**: Posts update instantly across the application

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI library
- **Redux Toolkit** - State management
- **Material-UI (MUI)** - Component library and styling
- **Axios** - HTTP client for API calls
- **Moment.js** - Date formatting

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Body-parser** - Request body parsing

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:
- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/lokman524/Blog-App.git
   cd Blog-App
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Set up environment variables**
   - Create a `.env` file in the `server` directory
   - Add your MongoDB connection string:
   ```env
   CONNECTION_URL=your-mongodb-connection-string
   PORT=3000
   ```

### Running the Application

1. **Start the server** (from the server directory):
   ```bash
   cd server
   npm start
   ```
   The server will run on `http://localhost:3000`

2. **Start the client** (from the client directory):
   ```bash
   cd client
   npm start
   ```
   The client will run on `http://localhost:3001`

3. **Open your browser** and navigate to `http://localhost:3001`

## �📁 Project Structure

```
Blog-App/
├── client/                 # React frontend
│   ├── public/            # Public assets
│   ├── src/
│   │   ├── actions/       # Redux actions
│   │   ├── api/           # API calls
│   │   ├── components/    # React components
│   │   ├── reducers/      # Redux reducers
│   │   └── images/        # Static images
│   └── package.json
├── server/                 # Express backend
│   ├── controllers/       # Route controllers
│   ├── models/           # MongoDB models
│   ├── routes/           # API routes
│   └── package.json
└── README.md
```

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts` | Get all posts |
| POST | `/posts` | Create a new post |
| PATCH | `/posts/id` | Update a post |
| DELETE | `/posts/id` | Delete a post |
| LIKE | `/posts/id/likePost` | Like a post |

