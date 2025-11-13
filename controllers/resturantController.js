const resturantModel = require("../models/resturantModel");

const createResturantController = async (req, res) => {
  try {
    const {
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    } = req.body;
    // validation
    if (!title || !coords) {
      return res.status(500).send({
        success: false,
        message: "please provide title and address",
      });
    }
    const newResturant = new resturantModel({
      title,
      imageUrl,
      foods,
      time,
      pickup,
      delivery,
      isOpen,
      logoUrl,
      rating,
      ratingCount,
      code,
      coords,
    });
    await newResturant.save();
    res.status(201).send({ success: true, message: "Resturant Created" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  create resturant Api",
      error,
    });
  }
};

const getAllResturantsController = async (req, res) => {
  try {
    const resturants = await resturantModel.find({});
    if (!resturants) {
      return res
        .status(500)
        .send({ success: false, message: "No resturant available" });
    }
    res
      .status(200)
      .send({ success: true, totalCount: resturants.length, resturants });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  get all resturant Api",
      error,
    });
  }
};

const getResturantByIdController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res
        .status(404)
        .send({ success: false, message: "please provide resturant id" });
    }
    const resturant = await resturantModel.findById(resturantId);
    if (!resturant) {
      return res
        .status(500)
        .send({ success: false, message: "no resturant found" });
    }
    res.status(200).send({ success: true, resturant });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  get resturant by id  Api",
      error,
    });
  }
};

const deleteResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "No resturant found or please provide resturant id",
      });
    }
    await resturantModel.findByIdAndDelete(resturantId);
    res.status(200).send({ success: true, message: "resturant deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  delete resturant Api",
      error,
    });
  }
};

module.exports = {
  createResturantController,
  getAllResturantsController,
  getResturantByIdController,
  deleteResturantController,
};
