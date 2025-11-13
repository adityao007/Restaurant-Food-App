const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createFoodController,
  getAllFoodController,
  getFoodByIdController,
  getFoodByResturantController,
  updateFoodController,
  deleteFoodController,
  placeOderController,
  orderstatusController,
} = require("../controllers/foodController");
const adminMiddleware = require("../middlewares/adminMiddleware");

// router object
const router = express.Router();

// create cat
router.post("/create", authMiddleware, createFoodController);

router.get("/getAll", getAllFoodController);

router.get("/get/:id", getFoodByIdController);

router.get("/getByResturant/:id", getFoodByResturantController);

router.put("/update/:id", authMiddleware, updateFoodController);

router.delete("/delete/:id", authMiddleware, deleteFoodController);

// place order
router.post("/placeorder", authMiddleware, placeOderController);

// order status
router.post(
  "/orderstatus/:id",
  authMiddleware,
  adminMiddleware,
  orderstatusController
);

// export
module.exports = router;
