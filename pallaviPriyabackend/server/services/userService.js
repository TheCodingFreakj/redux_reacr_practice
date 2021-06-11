const Users = require("../../models/users");
const db = require("../../models/index");

("use strict");

module.exports = class UserService {
  static async getAllUsers() {
    try {
      return await db.Users.findAll({
        attributes: ["id", "email", "password", "role"],
      });
    } catch (error) {
      throw error;
    }
  }

  static async addUser(newUser) {
    try {
      return await db.Users.create(newUser);
    } catch (error) {
      throw error;
    }
  }

  static async updateUser(id, updateUser) {
    try {
      const userToUpdate = await db.Users.findOne({
        where: { id: Number(id) },
      });

      if (userToUpdate) {
        await db.Users.update(updateUser, { where: { id: Number(id) } });

        return updateUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAUser(id) {
    try {
      const theUser = await db.Users.findOne({
        attributes: ["id", "fname", "email", "password", "role"],
        where: { id: Number(id) },
      });
      return theUser;
    } catch (error) {
      throw error;
    }
  }

  static async updatedPassword(id, resetPasswird) {
    console.log("this is from user service", resetPasswird);
    try {
      const theUser = await db.Users.findOne({
        attributes: ["id", "fname", "email", "password", "role"],
        where: { id: Number(id) },
      });

      theUser.password = resetPasswird;
      return theUser;
    } catch (error) {
      throw error;
    }
  }

  static async getAUserByEmail(rmail) {
    try {
      const theUser = await db.Users.findOne({
        attributes: ["id", "email", "username", "password"],
        where: { email: rmail },
      });

      return theUser;
    } catch (error) {
      throw error;
    }
  }
  static async deleteUser(id) {
    try {
      const userToDelete = await db.Users.findOne({
        where: { id: Number(id) },
      });

      if (userToDelete) {
        const deletedUser = await db.Users.destroy({
          where: { id: Number(id) },
        });
        return deletedUser;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }
};
