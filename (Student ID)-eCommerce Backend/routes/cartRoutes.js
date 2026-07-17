const express = require("express");
const router = express.Router();
const {
  createCart,
  getCart,
  addItemToCart,
  deleteCart,
} = require("../controllers/cartController");

router.post("/", createCart);
router.get("/:id", getCart);
router.post("/:id/items", addItemToCart); // add or bump the quantity of a single item
router.delete("/:id", deleteCart);

module.exports = router;
