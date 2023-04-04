const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sellerSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    address: {
      type: String,
    },
    profileImg: {
      type: String,
    },
    ratingId: {
      type: Schema.Types.ObjectId,
      ref: "Rating",
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Products",
      },
    ],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Seller = mongoose.model("Seller", sellerSchema);

module.exports = Seller;
