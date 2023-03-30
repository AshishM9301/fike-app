const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    sellerId: {
      type: Schema.Types.ObjectId,
      ref: "Seller",
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Categories",
    },
    subCategoryId: {
      type: Schema.Types.ObjectId,
      ref: "SubCategories",
    },
    productName: {
      type: String,
      required: true,
    },
    productImages: [
      {
        type: String,
      },
    ],
    coverImage: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    offerPrice: {
      type: Number,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
