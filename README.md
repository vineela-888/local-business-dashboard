# local-business-dashboard

# 📊 Mini Local Business Dashboard

A full-stack mini dashboard that simulates how small businesses might view their SEO content and Google Business data — one of GrowthProAI’s core use cases.

## 🚀 Features

- Business input form (name & location)
  - Simulated Google Rating & number of reviews
-  AI-style SEO headline generation
-  "Regenerate SEO Headline" button
-  Responsive UI using React & Tailwind CSS
- ⚙ RESTful backend using Node.js + Express

---
Tech Stack

### Frontend
- React (with Vite)
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express
- CORS

frontend/ # React + Tailwind App
backend/ # Node.js + Express API

 FRONTEND-SETUP:
 cd frontend
npm install
npm run dev



API Endpoints
Request Body:
{
  "name": "Cake & Co",
  "location": "Mumbai"
}
response
{
  "rating": 4.3,
  "reviews": 127,
  "headline": "Why Cake & Co is Mumbai's Sweetest Spot in 2025"
}

 Dev Environment


| Tool/Tech | Version |
| --------- | ------- |
| Node.js   | 18.x    |
| Express   | 4.x     |
| React     | 18+     |
| Tailwind  | 3.x     |
| Vite      | 5.x     |
| Axios     | Latest  |


