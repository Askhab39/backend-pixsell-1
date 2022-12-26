const mongoose = require("mongoose");
const { SchemaTypes } = require("mongoose");

const basketSchema = mongoose.Schema({
  userId: {
    type: SchemaTypes.ObjectId,
    ref: "User",
  },
  products: [
    {
      productId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Games",
      },
      price: Number
    },
  ],
  total: Number,
});

const Basket = mongoose.model("Basket", basketSchema);

module.exports = Basket;
