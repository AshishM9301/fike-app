const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    subCategoryId: [
      {
        type: Schema.Types.ObjectId,
        ref: "SubCategories",
      },
    ],
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  },
  { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

const Categories = mongoose.model("Categories", categorySchema);

module.exports = Categories;
