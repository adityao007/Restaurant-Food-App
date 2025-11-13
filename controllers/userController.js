const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

// GET USER INFO
const getUserController = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.user.id });
    // validation
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User Not Found",
      });
    }
    // hidden password
    user.password = undefined;
    // resp
    res.status(200).send({
      success: true,
      message: "User get successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in get user api",
      error,
    });
  }
};

const updateUserController = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.user.id });
    // validation
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User Not found ",
      });
    }
    // update
    const { username, phone, address } = req.body;
    if (username) user.username = username;
    if (address) user.address = address;
    if (phone) user.phone = phone;
    // save user
    await user.save();
    res.status(200).send({
      success: true,
      message: "user updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in update User Api",
      error,
    });
  }
};

const updatepasswordController = async (req, res) => {
  try {
    const user = await userModel.findById({ _id: req.user.id });
    // validation
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User Not found ",
      });
    }
    // get data from user
    const { oldpassword, newpassword } = req.body;
    if (!oldpassword || !newpassword) {
      return res.status(500).send({
        success: false,
        message: "Please provide old and new password",
      });
    }
    // compare user password
    const isMatch = await bcrypt.compare(oldpassword, user.password);
    if (!isMatch) {
      return res.status(500).send({
        success: false,
        message: "Invalid old password",
      });
    }
    // hashing password
    var salt = bcrypt.genSaltSync(10);
    const hashedpassword = await bcrypt.hash(newpassword, salt);
    user.password = hashedpassword;
    await user.save();
    res.status(200).send({
      success: true,
      message: "password updted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in update password Api",
      error,
    });
  }
};

const resetpasswordController = async (req, res) => {
  try {
    const { email, newpassword, answer } = req.body;
    if (!email || !newpassword || !answer) {
      return res.status(500).send({
        success: false,
        message: "Please provide all fields",
      });
    }
    const user = await userModel.findOne({ email, answer });
    if (!user) {
      return res.status(500).send({
        success: false,
        message: "User Not found or invalid answer",
      });
    }
    // hashing password
    var salt = bcrypt.genSaltSync(10);
    const hashedpassword = await bcrypt.hash(newpassword, salt);
    user.password = hashedpassword;
    await user.save();
    res.status(200).send({
      success: true,
      message: "reset password successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  password reset Api",
      error,
    });
  }
};

const deleteUserController = async (req, res) => {
  try{
    await userModel.findByIdAndDelete(req.params.id)
    return res.status(200).send({
      success:true,message:'user has been deleted'
    })
  }catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  delete user Api",
      error,
    });
  }
};

module.exports = {
  getUserController,
  updateUserController,
  updatepasswordController,
  resetpasswordController,
  deleteUserController,
};
