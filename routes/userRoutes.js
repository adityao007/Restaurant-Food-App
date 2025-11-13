const express = require("express");
const {
  getUserController,
  updateUserController,
  resetpasswordController,
  updatepasswordController,
  deleteUserController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

// router object
const router = express.Router();

// GET user || GET
router.get("/getUser", authMiddleware, getUserController);

// update Profile
router.put("/updateUser", authMiddleware, updateUserController);

// update password
router.post("/updatepassword", authMiddleware, updatepasswordController);

// reset Password
router.post("/resetpassword", authMiddleware, resetpasswordController);

// Delete
router.delete("/delete/:id", authMiddleware, deleteUserController);

// export
module.exports = router;
