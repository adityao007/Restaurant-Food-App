const mongoose = require("mongoose");

// schema
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      default: "category is required",
    },
    imageUrl: {
      type: String,
      default:
        "https://image.similarpng.com/file/similarpng/original-picture/2021/09/Good-food-logo-design-on-transparent-background-PNG.png",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
