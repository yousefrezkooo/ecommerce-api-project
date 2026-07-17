const reviewService = require("../services/reviewService");

const addReview = async (req, res, next) => {
  try {
    // productId comes from the URL (see the nested route in server.js), not the body
    const newReview = await reviewService.addReview(
      req.params.productId,
      req.body
    );
    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
};

const getProductReviews = async (req, res, next) => {
  try {
    const reviews = await reviewService.getProductReviews(
      req.params.productId
    );
    res.status(200).json(reviews);
  } catch (error) {
    next(error);
  }
};

module.exports = { addReview, getProductReviews };
