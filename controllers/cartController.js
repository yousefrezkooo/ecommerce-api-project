const cartService = require("../services/cartService");

const createCart = async (req, res, next) => {
  try {
    res.status(201).json(await cartService.createCart());
  } catch (error) {
    next(error);
  }
};

const getCart = async (req, res, next) => {
  try {
    const cart = await cartService.getCartById(req.params.id);
    if (!cart) return res.status(404).json({ error: "Cart not found" });
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};

const addItemToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const cart = await cartService.addItemToCart(
      req.params.id,
      productId,
      quantity
    );
    if (!cart) return res.status(404).json({ error: "Cart not found" });
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};

const deleteCart = async (req, res, next) => {
  try {
    const cart = await cartService.deleteCart(req.params.id);
    if (!cart) return res.status(404).json({ error: "Cart not found" });
    res.status(200).json({ message: "Cart deleted successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = { createCart, getCart, addItemToCart, deleteCart };
