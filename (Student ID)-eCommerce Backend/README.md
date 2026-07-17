# E-Commerce API

A REST API for a small e-commerce app, built with Node.js, Express, and MongoDB (via Mongoose). This was my final semester project — it covers product listings, shopping carts, and product reviews.

## Stack

- Node.js / Express 5
- MongoDB / Mongoose
- dotenv for config

## Features

- CRUD endpoints for products
- Cart creation, adding items, and deletion
- Reviews attached to a specific product
- Service layer between controllers and models, so route handlers stay focused on req/res
- One central error handler instead of repeating try/catch logic everywhere
- Seed script to populate the DB with sample products

## Getting Started

**1. Clone and install**

```bash
git clone https://github.com/yousefrezkooo/final-semester-project---ecomerce-api-.git
cd ecommerce-api
npm install
```

**2. Set up your environment variables**

Create a `.env` file in the root with your own values (this file is gitignored, so it never gets committed):

```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/ecommerce?retryWrites=true&w=majority
PORT=3000
```

**3. (Optional) Seed the database**

```bash
npm run seed
```

**4. Run it**

```bash
npm start      # normal run
npm run dev     # with nodemon, restarts on file changes
```

## API Endpoints

### Products

| Method | Endpoint            | Description           |
| ------ | -------------------- | ---------------------- |
| GET    | `/api/products`      | Get all products        |
| GET    | `/api/products/:id`  | Get a single product    |
| POST   | `/api/products`      | Create a product        |
| PUT    | `/api/products/:id`  | Update a product        |
| DELETE | `/api/products/:id`  | Delete a product        |

### Carts

| Method | Endpoint                     | Description                          |
| ------ | ------------------------------ | -------------------------------------- |
| POST   | `/api/carts`                  | Create a new (empty) cart               |
| GET    | `/api/carts/:id`               | Get a cart, with product details filled in |
| POST   | `/api/carts/:id/items`         | Add an item to a cart, or bump its quantity if it's already there |
| DELETE | `/api/carts/:id`               | Delete a cart                          |

### Reviews

Reviews are nested under a product, since a review always belongs to one.

| Method | Endpoint                                    | Description               |
| ------ | ---------------------------------------------- | --------------------------- |
| POST   | `/api/products/:productId/reviews`             | Add a review for a product   |
| GET    | `/api/products/:productId/reviews`             | Get all reviews for a product |

## Project structure

```
├── controllers/     route handler logic (req/res only)
├── services/        business logic + DB calls, called by the controllers
├── db/               mongoose connection
├── models/          schemas for Product, Cart, Review
├── routes/          express routers
├── seed.js           populates the DB with sample products
└── server.js         app entry point
```

## Notes / things I'd still add

- No auth yet, so carts and reviews aren't tied to a specific user
- `addItemToCart` doesn't check that the productId actually exists before adding it
- Tests — didn't get to writing any

---
Built as a final semester project.
