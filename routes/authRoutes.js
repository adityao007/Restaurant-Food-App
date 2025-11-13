const express = require("express");
const { registerController, loginController } = require("../controllers/authControllers");

// router object
const router = express.Router();

// routes register || POST
router.post("/register", registerController);

// routes login || POST
router.post("/login", loginController);

// export
module.exports = router;
