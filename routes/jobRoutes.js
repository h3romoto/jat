import express from "express";
import {
  createJob,
  deleteJob,
  updateJob,
  getAllJobs,
  showStats,
} from "../controllers/jobsController.js";

const router = express.Router();

router.route("/").post(createJob).get(getAllJobs);
// /stats route  has to be above /:id route
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob);


export default router;

