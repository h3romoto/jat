import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
const app = express();
dotenv.config();
const port = 5000;

// db connection
import connectDB from "./db/connectdb.js";

// routers and routes
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobRoutes.js";
app.use(express.json())

app.get("/", (req, res) => {
  res.send("This is the server talking");
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

// middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
// check for incorrect routes
app.use(notFoundMiddleware);
// check errors in existing routes (bottom of all middleware)
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server listening at port ${port} right now`);
    });
  } catch (error) {
    console.log(error);
  }
};

start()
