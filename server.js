import express from "express";
import dotenv from "dotenv";
import "express-async-errors";
import morgan from "morgan";

import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express();
dotenv.config();
const port = process.env.PORT;

// db connection
import connectDB from "./db/connectdb.js";

// routers and routes
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobRoutes.js";
app.use(express.json());
app.use(express.static(path.resolve(__dirname, './client/build')))
app.get("/api/v1", (req, res) => { res.json({ MSG: "This is the server talking" }); });

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobsRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

// middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
import authenticateUser from "./middleware/auth.js"

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}
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

start();
