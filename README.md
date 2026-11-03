# IRON DISTRICT — Fitness Studio

A modern, responsive gym membership website built with React, Vite, Tailwind CSS, Node.js, Express, and PostgreSQL.

IRON DISTRICT provides a platform for visitors to explore fitness programs, trainers, and membership plans. Registered users can select a membership and proceed through a Stripe Checkout integration.

**Live Website:** [https://fitness-studio-two-plum.vercel.app/](https://fitness-studio-two-plum.vercel.app/)
**Backend API:** [https://iron-district-api.onrender.com](https://iron-district-api.onrender.com)
**GitHub Repository:** [https://github.com/Muzamil-Iqbal-Code/fitness-studio-](https://github.com/Muzamil-Iqbal-Code/fitness-studio-)

---

## Features

### Frontend

- Responsive gym website with a modern dark-themed interface.
- Hero, About, Programs, Trainers, Membership, Testimonials, and Contact sections.
- Membership plans retrieved dynamically from the backend.
- Membership selection and Buy Now functionality.
- Dedicated payment success page.
- Loading and error states for API requests.

### Backend

- REST API built with Node.js and Express.
- PostgreSQL database integration.
- User authentication with password hashing and session management.
- PostgreSQL-backed session storage.
- Protected checkout endpoint.
- Order and order-item records.
- Authenticated order lookup endpoints.
- Stripe Checkout Session creation.
- Stripe webhook endpoint for payment confirmation.

### Payment Integration

The project includes a Stripe Checkout integration designed to:

1. Receive a membership plan selection.
2. Retrieve the actual plan price from PostgreSQL.
3. Create a pending order.
4. Create a Stripe Checkout Session.
5. Receive payment events through a verified webhook.
6. Update the order status after payment confirmation.
7. Display order details on the success page.

**Payment testing status:** The integration is implemented, but a successful Stripe payment and webhook test still require valid Stripe test credentials from an eligible account.

---

## Technology Stack

| Area             | Technologies            |
| ---------------- | ----------------------- |
| Frontend         | React, JavaScript, Vite |
| Styling          | Tailwind CSS            |
| Backend          | Node.js, Express.js     |
| Database         | PostgreSQL, Neon        |
| Authentication   | bcrypt, express-session |
| Session Storage  | connect-pg-simple       |
| Payments         | Stripe Checkout         |
| Frontend Hosting | Vercel                  |
| Backend Hosting  | Render                  |
| Version Control  | Git, GitHub             |

---

## Project Structure

```text
fitness-studio/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Membership.jsx
│   │   ├── Navbar.jsx
│   │   ├── Programs.jsx
│   │   ├── Reveal.jsx
│   │   ├── Testimonial.jsx
│   │   └── Trainers.jsx
│   │
│   ├── pages/
│   │   └── Success.jsx
│   │
│   ├── App.jsx
│   ├── api.js
│   └── index.css
│
├── server/
│   ├── controllers/
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── checkout.js
│   │   ├── classes.js
│   │   ├── orders.js
│   │   ├── plans.js
│   │   ├── stripeWebhook.js
│   │   └── trainers.js
│   ├── db.js
│   ├── schema.sql
│   ├── server.js
│   └── package.json
│
├── index.html
├── package.json
├── README.md
└── .gitignore
```

*The structure above describes the main project files; your repository may contain additional files.*

---

## Getting Started

### Prerequisites

Install the following:

- Node.js and npm
- Git
- PostgreSQL database (or a Neon PostgreSQL database)
- A Stripe test environment with valid credentials for payment testing

### 1. Clone the repository

```bash
git clone https://github.com/Muzamil-Iqbal-Code/fitness-studio-.git
cd fitness-studio-
```

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Install backend dependencies

```bash
cd server
npm install
```

### 4. Configure environment variables

Create a `.env.local` file in the project root.

Use the following variable names and supply your own values:

```env
DATABASE_URL=your_postgresql_connection_string
SESSION_SECRET=your_session_secret
CLIENT_URL=http://localhost:5173

STRIPE_SECRET_KEY=your_stripe_test_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
STRIPE_CURRENCY=pkr

NODE_ENV=development
```

For the frontend, configure `VITE_API_URL` in the root `.env.local` or your frontend environment configuration:

```env
VITE_API_URL=http://localhost:5000
```

Never commit `.env.local` or any real API keys, database credentials, or session secrets to GitHub.

### 5. Configure the database

Create a PostgreSQL database and execute the SQL statements in:

```text
server/schema.sql
```

This creates the database tables required by the application, including users, membership plans, orders, and order items.

Ensure your membership plans are populated in the database.

### 6. Start the backend

From the `server` directory:

```bash
npm start
```

The backend runs on:

```text
http://localhost:5000
```

### 7. Start the frontend

Open a second terminal in the project root:

```bash
npm run dev
```

The frontend runs on:

```text
http://localhost:5173
```

### 8. Build for production

From the project root:

```bash
npm run build
```

---

## API Endpoints

| Method      | Endpoint                         | Purpose                                       |
| ----------- | -------------------------------- | --------------------------------------------- |
| GET         | `/`                              | Backend health check                          |
| GET         | `/api/plans`                     | Retrieve membership plans                     |
| POST        | `/api/checkout`                  | Create a membership checkout session          |
| GET         | `/api/orders/:id`                | Retrieve an authenticated user's order        |
| GET         | `/api/orders/session/:sessionId` | Retrieve an order using its Stripe session ID |
| POST        | `/api/stripe/webhook`            | Receive Stripe payment events                 |
| `/api/auth` | Authentication routes            | User authentication                           |

Protected endpoints require a valid login session.

---

## Payment Flow

```text
User selects a membership
          |
          v
Frontend sends plan ID
          |
          v
Backend verifies login
          |
          v
Backend retrieves plan price
from PostgreSQL
          |
          v
Pending order is created
          |
          v
Stripe Checkout Session
is created
          |
          v
Customer completes checkout
          |
          v
Stripe sends webhook event
          |
          v
Backend verifies signature
          |
          v
Order status is updated
          |
          v
Success page retrieves
order information
```

The frontend does not independently mark an order as paid. Payment confirmation is handled by the backend webhook.

---

## Deployment

| Component | Platform        |
| --------- | --------------- |
| Frontend  | Vercel          |
| Backend   | Render          |
| Database  | Neon PostgreSQL |

Configure production environment variables in the hosting platforms rather than committing secrets to the repository.

For production payment testing, configure valid Stripe credentials and a webhook endpoint.

---



## Author

**Muzamil Iqbal**

Software Engineering Student

GitHub: [https://github.com/Muzamil-Iqbal-Code](https://github.com/Muzamil-Iqbal-Code)

---

## License
Hold my Muzamil Iqbal
.
