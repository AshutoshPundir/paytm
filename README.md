# PayTM - Payment Application

A full-stack payment application built with a modern tech stack. This project implements a basic version of a payment system similar to PayTM, with both frontend and backend components.

## 🎯 Overview

This is a learning project that demonstrates how to build a complete payment application with user authentication, secure transactions, and a responsive user interface.

## 📁 Project Structure

```
paytm/
├── backend/              # Express.js backend server
│   ├── package.json
│   └── ...
├── frontend/             # React + Vite frontend application
│   ├── package.json
│   ├── src/
│   └── ...
├── README.md
└── package-lock.json
```

## 🛠️ Tech Stack

### Backend
- **Node.js + Express.js** - REST API server
- **MongoDB + Mongoose** - Database and ORM
- **JWT (jsonwebtoken)** - Authentication and authorization
- **Zod** - Schema validation
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AshutoshPundir/paytm.git
   cd paytm
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Configuration

Create a `.env` file in the backend directory with the following variables:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/paytm
JWT_SECRET=your_jwt_secret_key_here
```

### Running the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:5173` and the backend API at `http://localhost:3000`.

## 📚 Available Scripts

### Backend
- `npm start` - Start the Express server
- `npm test` - Run tests (to be implemented)

### Frontend
- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## ✨ Features

- User authentication with JWT tokens
- Secure payment transactions
- User-friendly interface with Tailwind CSS
- RESTful API architecture
- Request validation with Zod
- MongoDB database integration
- CORS enabled for cross-origin requests

## 📖 API Endpoints

*Documentation for API endpoints to be added*

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

ISC

## 👤 Author

**Ashutosh Pundir**
- GitHub: [@AshutoshPundir](https://github.com/AshutoshPundir)

## 📞 Support

For support, please open an issue in the repository.

---

**Note:** This is a learning project. For production use, additional security measures and features should be implemented.
