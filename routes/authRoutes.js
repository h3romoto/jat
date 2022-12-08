import express from "express";
import { register, login, updateUser } from "../controllers/authController.js";
import authenticateUser from "../middleware/auth.js";
import rateLimiter from "express-rate-limit";

const router = express.Router();
const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 100, // 15 minutes
  max: 10,
  message: "Too many requests. Please try again after 15 minutes",
});

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
// authenticateuser middleware
router.route("/updateUser").patch(authenticateUser, updateUser);

export default router;
