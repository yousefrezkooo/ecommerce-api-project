const mongoose = require("mongoose");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const Product = require("./models/Product");

dotenv.config();

// a few sample products so there's something to hit the API with right
// after cloning, instead of starting from a totally empty DB
const sampleProducts = [
  {
    name: "Wireless Mouse",
    price: 19.99,
    description: "A basic wireless mouse with a USB receiver.",
    category: "Electronics",
  },
  {
    name: "Mechanical Keyboard",
    price: 59.99,
    description: "Tactile mechanical keyboard with blue switches.",
    category: "Electronics",
  },
  {
    name: "Insulated Water Bottle",
    price: 12.5,
    description: "Stainless steel water bottle, 750ml, keeps drinks cold for hours.",
    category: "Home",
  },
  {
    name: "Lined Notebook",
    price: 4.99,
    description: "A5 notebook, 100 pages, plain lined paper.",
    category: "Stationery",
  },
];

const seed = async () => {
  await connectDB();

  // wipe whatever's already there so re-running this doesn't create duplicates
  await Product.deleteMany({});
  await Product.insertMany(sampleProducts);

  console.log(`Seeded ${sampleProducts.length} products`);

  // close the connection cleanly instead of just killing the process
  await mongoose.connection.close();
  process.exit(0);
};

seed().catch(async (error) => {
  console.error("Seeding failed:", error.message);
  await mongoose.connection.close();
  process.exit(1);
});
