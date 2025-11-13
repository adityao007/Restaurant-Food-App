const categoryModel = require("../models/categoryModel");

const createCatController = async (req, res) => {
  try {
    const { title, imageUrl } = req.body;
    if (!title) {
      return res
        .status(500)
        .send({ success: false, message: "please provide category title" });
    }
    const newCategory = new categoryModel({ title, imageUrl });
    await newCategory.save();
    res.status(200).send({ success: true, message: "category created" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  create category Api",
      error,
    });
  }
};

const getAllCatController = async (req, res) => {
  try {
    const categories = await categoryModel.find({});
    if (!categories) {
      return res
        .status(500)
        .send({ success: false, message: "No category found" });
    }
    res
      .status(200)
      .send({ success: true, totalCategories: categories.length, categories });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  get all category Api",
      error,
    });
  }
};

const updateCatController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, imageUrl } = req.body;
    const updateCategory = await categoryModel.findByIdAndUpdate(
      id,
      { title, imageUrl },
      { new: true }
    );
    if (!updateCategory) {
      return res
        .status(500)
        .send({ success: false, message: "No category found" });
    }
    res.status(200).send({ success: true, message: "Category Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  update category Api",
      error,
    });
  }
};

const deleteCatController = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(500)
        .send({ success: false, message: "please provide category id" });
    }
    const category = await categoryModel.findById(id);
    if (!category) {
      return res
        .status(500)
        .send({ success: false, message: "no category found" });
    }
    await categoryModel.findByIdAndDelete(id);
    res.status(200).send({ success: true, message: "category deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  update category Api",
      error,
    });
  }
};

module.exports = {
  createCatController,
  getAllCatController,
  updateCatController,
  deleteCatController,
};
