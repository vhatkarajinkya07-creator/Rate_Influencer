# RateInfluencer

An AI-powered influencer analytics and campaign management platform built with the MERN stack. The application enables users to evaluate influencer performance, manage campaigns, and leverage AI-generated insights to support data-driven marketing decisions.

## Features

* Influencer performance analytics and evaluation
* Campaign creation and management
* AI-powered insights using Google Gemini
* Responsive and intuitive user interface
* RESTful API architecture
* Full-stack MERN implementation

## Tech Stack

**Frontend**

* React
* JavaScript
* CSS

**Backend**

* Node.js
* Express.js

**Database**

* MongoDB

**AI Integration**

* Google Gemini API

---

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
cd RateInfluencer
```

### Backend Setup

```bash
cd server
npm install
npm run dev
```

Create a `.env` file inside the `server` directory:

```env
PORT=5001
GEMINI_API_KEY=your_api_key_here
```

### Frontend Setup

Open a new terminal:

```bash
cd client
npm install
npm run dev
```

---

## Local Development

* Frontend: `http://localhost:5173`
* Backend: `http://localhost:5001`

---

## Project Architecture

The application follows a client-server architecture:

* **React** powers the frontend user experience.
* **Node.js** and **Express.js** provide backend services and REST APIs.
* **MongoDB** handles persistent data storage.
* **Gemini API** delivers AI-driven insights and recommendations.

---

## Future Enhancements

* Advanced influencer scoring models
* Campaign performance forecasting
* Role-based access control
* Real-time analytics dashboards
* Enhanced reporting and visualization capabilities

---

## License

This project is intended for educational and portfolio purposes.
