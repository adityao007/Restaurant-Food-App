const foodModel = require("../models/foodModel");
const orderModel = require("../models/orderModel");

const createFoodController = async (req, res) => {
  try {
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvaible,
      resturant,
      rating,
      ratingCount,
    } = req.body;

    if (!title || !description || !price || !resturant) {
      return res.status(500).send({
        success: false,
        message: "Please provide all details",
      });
    }
    const newFood = new foodModel({
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvaible,
      resturant,
      rating,
      ratingCount,
    });
    await newFood.save();
    res
      .status(200)
      .send({ success: true, message: "new food item creted", newFood });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  create food Api",
      error,
    });
  }
};

const getAllFoodController = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    if (!foods) {
      return res
        .status(500)
        .send({ success: false, message: "No food items was found" });
    }
    res.status(200).send({ success: true, totalfoods: foods.length, foods });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  get all food Api",
      error,
    });
  }
};

const getFoodByIdController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      return res
        .status(404)
        .send({ success: false, message: "please provide food item id" });
    }
    const food = await foodModel.findById(foodId);
    if (!food) {
      return res
        .status(500)
        .send({ success: false, message: "no food item found" });
    }
    res.status(200).send({ success: true, food });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  get food item by id  Api",
      error,
    });
  }
};

const getFoodByResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res
        .status(404)
        .send({ success: false, message: "please provide food item id" });
    }
    const food = await foodModel.find({ resturant: resturantId });
    if (!food) {
      return res
        .status(500)
        .send({ success: false, message: "no food item found" });
    }
    res
      .status(200)
      .send({ success: true, message: "food based on resturant", food });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  get food item by id  Api",
      error,
    });
  }
};

const updateFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      return res
        .status(404)
        .send({ successs: false, message: "no food id was found" });
    }
    const food = await foodModel.findById(foodId);
    if (!food) {
      return res
        .status(500)
        .send({ success: false, message: "No food item found" });
    }
    const {
      title,
      description,
      price,
      imageUrl,
      foodTags,
      category,
      code,
      isAvaible,
      resturant,
      rating,
    } = req.body;
    const updatedFood = await foodModel.findByIdAndUpdate(
      foodId,
      {
        title,
        description,
        price,
        imageUrl,
        foodTags,
        category,
        code,
        isAvaible,
        resturant,
        rating,
      },
      { new: true }
    );
    res.status(200).send({ success: true, message: "food item Updated" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  update food item Api",
      error,
    });
  }
};

const deleteFoodController = async (req, res) => {
  try {
    const foodId = req.params.id;
    if (!foodId) {
      return res
        .status(500)
        .send({ success: false, message: "please provide food id" });
    }
    const food = await foodModel.findById(foodId);
    if (!food) {
      return res.status(500).send({ success: false, message: "no food found" });
    }
    await foodModel.findByIdAndDelete(foodId);
    res.status(200).send({ success: true, message: "food deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  delete food item Api",
      error,
    });
  }
};

// place order
const placeOderController = async (req, res) => {
  try {
    const { cart } = req.body;
    if (!cart) {
      return res.status(500).send({
        success: false,
        message: "please food cart and payment method",
      });
    }
    let total = 0;

    cart.map((i) => {
      total += i.price;
    });
    const newOrder = await orderModel({
      food: cart,
      payment: total,
      buyer: req.user.id,
    });
    await newOrder.save();
    res.status(201).send({ success: true, message: "Order placed", newOrder });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in place order api" });
  }
};

const orderstatusController = async (req, res) => {
  try {
    const orderId = req.params.id;
    if (!orderId) {
      return res
        .status(404)
        .send({ success: false, message: "please provide order id" });
    }
    const { status } = req.body;
    const order = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    res.status(200).send({ success: true, message: "order status updated" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Error in order status api" });
  }
};

module.exports = {
  createFoodController,
  getAllFoodController,
  getFoodByIdController,
  getFoodByResturantController,
  updateFoodController,
  deleteFoodController,
  placeOderController,
  orderstatusController,
};
