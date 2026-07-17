const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    // every review has to belong to a product, hence required
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true, trim: true },
    shopperName: { type: String, default: "Anonymous" }, // didn't want to force login just to leave a review
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
