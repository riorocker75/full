const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
import Users from "../models/users";

class Users {
  static async getUsers(req, res, next) {
    try {
      const users = await Users.findAll({
        attributes: ["id", "name", "email"],
      });
      res.json(users);
    } catch (error) {
      console.log(error);
    }
  }







  
}
