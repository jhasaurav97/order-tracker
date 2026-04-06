# Mini Order Status Tracker

## Overview
This is a simple full-stack application where:
- A rider updates the order status
- A customer can track the order status in near real-time

The system is designed with clean API structure, basic authentication, and reactive frontend updates.

---

## Tech Stack

**Backend**
- Node.js
- Express.js

**Frontend**
- React (Vite)
- Axios

**Storage**
- In-memory (JavaScript object)

---

## Features

### Backend
- POST `/api/orders/:orderId/status`
  - Updates order status
  - Protected via Bearer token
  - Returns 400 for invalid status
  - Returns 401 for missing/invalid token

- GET `/api/orders/:orderId/status`
  - Fetches current order status
  - Returns 404 if order not found

### Frontend
- Rider Panel
  - Enter orderId and token
  - Update status using buttons
  - See updated status instantly

- Customer Panel
  - Enter orderId
  - Auto-fetches status every 4 seconds (polling)
  - Updates UI without refresh

---

## API Design Decisions

- RESTful route structure: `/orders/:orderId/status`
- Proper HTTP status codes:
  - 200 → success
  - 400 → invalid input
  - 401 → unauthorized
  - 404 → not found
- Middleware used for authentication
- Clean separation: routes, controllers, middleware

---

## Authentication

- Simple Bearer token-based authentication
- Hardcoded token: mysecrettoken
- Applied only to rider (POST API)

---

## How to Run Locally

### 1. Clone Repository
- git clone <your-repo-link>
- cd order-tracker

---

### 2. Backend Setup

- cd server
- npm install
- npm run start
- Backend runs on: http://localhost:5000

---

### 3. Frontend Setup

- cd client
- npm install
- npm run dev
- Frontend runs on: http://localhost:5173

---

## How to Use

### Rider Flow
- Enter orderId (e.g., 123)
- Enter token: `mysecrettoken`
- Click status buttons to update

### Customer Flow
- Enter same orderId
- Status updates automatically every 4 seconds

---

## Assumptions Made

- No database required → used in-memory storage
- Single hardcoded token is sufficient for authentication
- One orderId corresponds to one order
- Polling is acceptable for real-time simulation

---

## What I Would Improve (Given More Time)

- Replace polling with WebSocket for real-time updates
- Add database (MongoDB/PostgreSQL) for persistence
- Add status transition validation (e.g., prevent delivered → pending)
- Improve UI/UX design
- Add unit tests for API and validation logic
- Add loading/error states in frontend

---

## Git Hygiene

- Structured commits for each feature:
  - Backend setup
  - Auth middleware
  - POST API
  - GET API
  - Frontend panels
  - CORS fix

---

## Notes

- Data resets on server restart due to in-memory storage
- Designed to be simple, readable, and easy to extend
