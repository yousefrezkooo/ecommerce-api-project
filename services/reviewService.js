const Review = require("../models/Review");

const addReview = (productId, data) =>
  Review.create({ ...data, product: productId });

const getProductReviews = (productId) => Review.find({ product: productId });

module.exports = { addReview, getProductReviews };
