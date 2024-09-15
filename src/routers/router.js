/** @format */

import express from "express";
import userRoutes from "./user.router.js";
const router = express.Router();

router.use("/user", UserRoutes);

export default router;