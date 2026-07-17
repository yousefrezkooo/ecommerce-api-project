const Cart = require("../models/Cart");

const createCart = () => Cart.create({ items: [] });

// populate so we get full product details instead of just the id
const getCartById = (id) => Cart.findById(id).populate("items.product");

const addItemToCart = async (cartId, productId, quantity) => {
  const cart = await Cart.findById(cartId);
  if (!cart) return null;

  // if the product's already in the cart, just bump the quantity instead of duplicating it
  const itemIndex = cart.items.findIndex(
    (p) => p.product.toString() === productId
  );
  if (itemIndex > -1) {
    cart.items[itemIndex].quantity += quantity;
  } else {
    cart.items.push({ product: productId, quantity });
  }

  return cart.save();
};

const deleteCart = (id) => Cart.findByIdAndDelete(id);

module.exports = { createCart, getCartById, addItemToCart, deleteCart };
