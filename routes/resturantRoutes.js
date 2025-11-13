const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createResturantController,
  getAllResturantsController,
  getResturantByIdController,
  deleteResturantController,
} = require("../controllers/resturantController");

// router object
const router = express.Router();

// create Resturant | POST
router.post("/create", authMiddleware, createResturantController);

// get all resturants || GET
router.get("/getAll", getAllResturantsController);

// get resturant by id || GET
router.get("/get/:id", getResturantByIdController);

// delete Resturant || DELETE

router.delete("/delete/:id", authMiddleware,deleteResturantController);

// export
module.exports = router;
