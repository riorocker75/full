import express from "express";
const router = express.Router();
// import { getUsers } from "../controllers/user";
const { getUsers } = require("../controllers/user");

const user = require("./user");

router.get("/users", getUsers);
export default router;
