import express from "express";
import {
  downloadFile,
  fileUploadController,
} from "../controllers/fileController.js";
import upload from "../utils/upload.js";

const router = express.Router();

//upload file || post
router.post("/upload", upload.single("file"), fileUploadController);

//download file || get
router.get("/file/:fileId", downloadFile);

export default router;
