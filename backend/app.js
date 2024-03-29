import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config({ path: "./config.env" });
import "./db/conn.js";
import authrouter from "./routers/auth.js";
import adminrouter from "./routers/admin.js";
import facultyauth from "./routers/faculty.js";
import studentauth from "./routers/student.js";
import Jwt from "jsonwebtoken";

const app = express();
app.use(authrouter);
app.use(adminrouter);
app.use(facultyauth);
app.use(studentauth);
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with the actual origin of your frontend app
  })
);
app.listen(process.env.PORT, () => {
  console.log("Server start");
});
