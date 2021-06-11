const express = require("express");
const tokenAuth = require("../helpers/tokenAuth");
// const express = require("../controllers/authContoller");
const UserController = require("../controllers/authController");
const router = express.Router();

// buses Routes

router.post("/add_new_user", UserController.addUser);
router.post("/login", UserController.loginuser); //if not token then cant login
router.get("/login_protected", tokenAuth, UserController.protecteduser);
router.post("/logout", tokenAuth, UserController.loginout);

//get the profile and update
router.get(
  "/get_admin_user",
  tokenAuth,
  UserController.isAdmin,
  UserController.protecteduser
);
router.get(
  "/get_auth_user",
  tokenAuth,
  UserController.isAuth,
  UserController.protecteduser
);
router.put(
  "/update_user/:id",
  tokenAuth,
  UserController.isAdmin,
  UserController.updatedUser
);

router.put("/forgotpassword",UserController.forgotpassword);
router.put("/resetpassword", UserController.resetPassword);
router.delete(
  "/delete_user/:id",
  tokenAuth,
  UserController.isAdmin,
  UserController.deleteUser
);
router.get("/get_all_users", UserController.getAllUsers);

module.exports = router;
