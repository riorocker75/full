const { Op } = require("sequelize");
const bcrypt = require("bcrypt");
import Users from "../models/user.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "name", "email"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};


export const Login = async (req, res) => {
  try {
    const user = await Users.findAll({
      where: {
        email: req.body.email,
      },
    });
    const cek_kombinasi = await bcrypt.compare(req.body.password, user[0].password);
    if (!cek_kombinasi) return res.status(400).json({ msg: "Salah Kombinasi" });
 
    return res.status(200).json({
      status: 200
    });

  } catch (error) {
    res.status(404).json({ msg: "Email tidak ditemukan" });
  }
};

