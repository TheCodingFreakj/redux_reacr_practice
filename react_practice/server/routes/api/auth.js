const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const auth = require("../../middlewares/auth");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

const User = require("../../models/user");

// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get("/", auth, async (req, res) => {
  //token is valid you get the user and see the content of protected page
  try {
    const user = await User.findById(req.user.id).select("-password");
    return res.status(200).json(user);
  } catch (err) {
    return res
      .status(500)
      .send("the request done is falsy..try again with right credentials");
  }

  //IN the front end we will make a request with the token (after authentication through the middleware) then we will fill our redux state with this user value in an user object
});

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  "/",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      // console.log(user);
      //no user
      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      //if user exists check the password
      const isMatch = await bcrypt.compare(password, user.password);
      //no password
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid Credentials" }] });
      }

      const payload = {
        user: {
          id: user._id,
        },
      };

      jwt.sign(payload, "jwtSecret", { expiresIn: "5 days" }, (err, token) => {
        if (err) throw err;

        return res
          .status(200)
          .json({ message: "login don", token: token, user: user });
      });
    } catch (err) {
      console.log("this is hit");
      return res
        .status(500)
        .send("the request done is falsy..try again with right credentials");
    }
  }
);

module.exports = router;
