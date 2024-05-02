import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(
  cors({
    origin: ["https://contacts-beta-wine.vercel.app", "http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

import userRouter from "./routes/user.routes.js";

app.use("/api/v1/users", userRouter);

export { app };
