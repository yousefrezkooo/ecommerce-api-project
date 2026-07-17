const mongoose = require("mongoose");

// basic product schema, nothing fancy
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 }, // no negative prices lol
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, default: "default.jpg" }, // fallback so the frontend doesn't break on missing images
  },
  { timestamps: true } // gives us createdAt / updatedAt for free
);

module.exports = mongoose.model("Product", productSchema);
