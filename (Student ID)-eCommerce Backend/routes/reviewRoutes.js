const express = require("express");
const router = express.Router();
const {
  addReview,
  getProductReviews,
} = require("../controllers/reviewController");

// this router is mounted at /api/products/:productId/reviews in server.js,
// so req.params.productId is available in the controller even though it's not defined here
router.post("/", addReview);
router.get("/", getProductReviews);

module.exports = router;
