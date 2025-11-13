const mongoose = require("mongoose");

// schema
const foodSchema = new mongoose.Schema(
  {
    title: { type: String, required: [true, "food title is required"] },
    description: { type: String, required: [true, "description is required"] },
    price: { type: String, required: [true, "food price is required"] },
    imageUrl: {
      type: String,
      default:
        "https://image.similarpng.com/file/similarpng/original-picture/2021/09/Good-food-logo-design-on-transparent-background-PNG.png",
    },
    foodTags: { type: String },
    category: { type: String },
    code: { type: String },
    isAvaible: { type: Boolean, default: true },
    resturant: { type: mongoose.Schema.Types.ObjectId, ref: "Resturant" },
    rating: { type: Number, default: 5, min: 1, max: 5 },
    ratingCount: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Food", foodSchema);
