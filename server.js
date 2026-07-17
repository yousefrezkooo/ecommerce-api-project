const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");

const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

dotenv.config();
const app = express();

app.use(express.json());

// routes
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);
// reviews live under a product since a review can't exist without one
app.use("/api/products/:productId/reviews", reviewRoutes);

// catch anything that doesn't match a route above
app.use((req, res, next) => {
  const error = new Error("Endpoint Not Found");
  error.status = 404;
  next(error);
});

// one error handler for everything, keeps the controllers clean
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;

// only start listening once we're actually connected to the DB
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
