const { Schema, model } = require("mongoose");
const cartpageSchema = new Schema(
  {
    name: { type: String },
    price: { type: String },
    id: { type: Number },
    img: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("cartpage", cartpageSchema);
