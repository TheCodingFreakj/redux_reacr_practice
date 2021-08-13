const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../../models/user");

//Register User

router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    //we can handle this in react front end however we want
    //we can display the errors inside of an alert

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //   "errors": [
    //     {
    //         "value": "123",
    //         "msg": "Please enter a password with 6 or more characters",
    //         "param": "password",
    //         "location": "body"
    //     }
    // ]
    const { name, email, password, role } = req.body; //save all from the req.body
    try {
      //see if the user exists
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({
          errors: [
            { msg: "User already exists in our database..Please Login " },
          ],
        });
      }

      user = new User({
        name,
        email,
        password,
        role,
      });
      //encrypt password

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();
      const payload = {
        user: {
          id: user.id, //this is the user we just saved
        },
      };
      jwt.sign(payload, "jwtSecret", { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        return res.status(200).json({ token: token, user: user });
      });
    } catch (err) {
      console.log(err);
      return res
        .status(500)
        .send("the request done is falsy..try again with right credentials");
    }
  }
);

module.exports = router;
