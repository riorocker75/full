import express from "express";
const { getUsers,Login } = require("../controllers/user");

const router = express.Router();


router.get("/users", Login);
router.post("/login", Login);

export default router;
