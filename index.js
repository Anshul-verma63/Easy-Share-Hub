import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/fileRoute.js";
import dbConnect from "./config/db.js";
import bodyParser from "body-parser";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

//middlware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
//database connection
dbConnect();

//rest api
app.get("/", (req, res) => {
  res.send("hello i am server");
});

app.use("/api/v1/file", router);

app.listen(PORT, () => {
  console.log(`server running on PORT ${PORT}`);
});
