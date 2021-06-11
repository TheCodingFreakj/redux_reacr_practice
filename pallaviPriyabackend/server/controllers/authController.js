const UserService = require("../services/UserService");
const jwt = require("jsonwebtoken");
const Util = require("../utils");
const bcrypt = require("bcrypt");
const util = new Util();
const nodemailer = require("nodemailer");
("use strict");

module.exports = class UserController {
  static async getAllUsers(req, res) {
    try {
      const allUsers = await UserService.getAllUsers();
      if (allUsers.length > 0) {
        util.setSuccess(200, "Users retrieved", allUsers);
      } else {
        util.setSuccess(200, "No user found");
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
  static async isAuth(req, res, next) {
    try {
      const authUserID = req.id; //the id from the tokenAuth middleware
      const authuser = await UserService.getAUser(authUserID);
      console.log(authuser);

      if (authuser.role != 0) {
        util.setError(
          400,
          "we dont give admins to access this page.Login as user"
        );
        return util.send(res);
      }
      req.id = authuser.id;
      next();
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async isAdmin(req, res, next) {
    try {
      const adminUserID = req.id; //the id from the tokenAuth middleware
      const adminuser = await UserService.getAUser(adminUserID);
      console.log(adminuser);

      if (adminuser.role != 1) {
        util.setError(400, "Dear user you dont have access to admin pages");
        return util.send(res);
      }
      req.id = adminuser.id;
      next();
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
  static async addUser(req, res) {
    console.log(req.body);
    try {
      if (
        !req.body.fname ||
        !req.body.lname ||
        !req.body.email ||
        !req.body.password ||
        !req.body.role ||
        !req.body.username
      ) {
        util.setError(400, "Please provide complete details");
        return util.send(res);
      }
      const newuser = req.body;
      const oldUser = await UserService.getAUserByEmail(req.body.email);
      if (oldUser) {
        util.setError(400, "user exists");
        return util.send(res);
      }

      const createdUser = await UserService.addUser(newuser);

      const payload = {
        id: createdUser.id,
      };

      const token = jwt.sign(payload, "super_secret", {
        expiresIn: "1d",
      });

      util.setMessage(200, "Sign Up Done.. Please Sign In And Shop");
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedUser(req, res) {
    const alteredUser = req.body;
    console.log(alteredUser);
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }
    try {
      const updateUser = await UserService.updateUser(id, alteredUser);
      if (!updateUser) {
        util.setError(404, `Cannot find user with the id: ${id}`);
      } else {
        util.setSuccess(200, "user updated", updateUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getAUser(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please input a valid numeric value");
      return util.send(res);
    }

    try {
      const theUser = await UserService.getAUser(id);

      if (!theUser) {
        util.setError(404, `Cannot find user with the id ${id}`);
      } else {
        util.setSuccess(200, "Found User", theUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async deleteUser(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, "Please provide a numeric value");
      return util.send(res);
    }

    try {
      const userToDelete = await UserService.deleteUser(id);

      if (userToDelete) {
        util.setSuccess(200, "User deleted");
      } else {
        util.setError(404, `User with the id ${id} cannot be found`);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async loginuser(req, res) {
    try {
      if (!req.body.email || !req.body.password) {
        util.setError(400, "Please provide complete details");
        return util.send(res);
      }
      const oldUser = await UserService.getAUserByEmail(req.body.email);

      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        oldUser.password
      );

      if (!isPasswordValid) {
        util.setError(400, "passwords dont match");
        return util.send(res);
      }

      const fetcheduser = await UserService.getAUser(oldUser.id);

      const payload = {
        id: fetcheduser.id,
      };
      // console.log(process.env.JWT_SECRET);

      let token;
      try {
        token = jwt.sign(payload, "super_secret", { expiresIn: "1h" });
        res.cookie("token", token, { expiresIn: "1d" });
        util.setSuccess(200, "Login done", token, fetcheduser);
        return util.send(res);
      } catch (err) {
        const error = new HttpError(
          "Signing up failed, please try again later.",
          500
        );
        return next(error);
      }
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async protecteduser(req, res) {
    try {
      const theUser = await UserService.getAUser(req.id);

      if (!theUser) {
        util.setError(404, `Cannot find user with the id ${req.user.id}`);
      } else {
        util.setSuccess(200, "Found User", theUser);
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async loginout(req, res) {
    try {
      res.clearCookie("token");
      util.setSuccess(200, "Sign Out Success");
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async forgotpassword(req, res) {
    try {
      if (!req.body.email) {
        util.setError(400, "Please provide complete details");
        return util.send(res);
      }
      const oldUser = await UserService.getAUserByEmail(req.body.email);
      if (!oldUser) {
        util.setError(400, "user with this email dont exist");
        return util.send(res);
      }

      const payload = {
        id: oldUser.id,
      };

      const token = jwt.sign(payload, "superresret_secret", {
        expiresIn: "1d",
      });

      oldUser.resetPasswordToken = token;
      oldUser.resetPasswordExpires = Date.now() + 3600000; // 1 hour
      // //send the email withn this tolen

      const transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "5c2517605700d7", // replace with your Mailtrap credentials
          pass: "b7838e5512b382",
        },
        debug: true, // show debug output
        logger: true, // log information in console
      });
      var mailOptions = {
        to: oldUser.email,
        from: "pallavidapriya75@gmail.com",
        subject: "Password Reset",
        text:
          "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
          "Please click on the following link, or paste this into your browser to complete the process:\n\n" +
          "http://" +
          req.headers.host +
          "/reset/" +
          oldUser.id +
          "/" +
          token +
          "\n\n" +
          "If you did not request this, please ignore this email and your password will remain unchanged.\n",
      };
      transporter.sendMail(mailOptions, function (err) {
        if (err) {
          util.setError(400, "there's some issue");
          return util.send(res);
        }

        util.setMessage(200, "Link Sent");
        return util.send(res);
      });
      //update the databse
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async resetPassword(req, res) {
    try {
      const { id, resetPasswordToken, newPassword } = req.body;

      if (!Number(id)) {
        util.setError(400, "Please input a valid numeric value");
        return util.send(res);
      }
      const theUser = await UserService.getAUser(id);

      if (!theUser) {
        util.setError(404, `Cannot find user with the id ${id}`);
      } else {
        jwt.verify(
          resetPasswordToken,
          "superresret_secret",
          async function (err, decoded) {
            if (err) {
              // console.log("This is the error", err);
              util.setError(400, "resetPasswordToken expired try again");
              return util.send(res);
            }

            const theUser = await UserService.updatedPassword(id, newPassword);

            await bcrypt
              .hash(theUser.password, 10)
              .then((hash) => {
                theUser.password = hash;
                theUser.resetPasswordToken = null;
              })
              .catch((err) => {
                throw new Error(err);
              });
          }
        );

        return res.status(400).json({
          status: "success",
          message: "password Updated",
          data: theUser,
        });
      }
      ret;
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
};
