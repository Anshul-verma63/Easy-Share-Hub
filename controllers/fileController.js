import fileModel from "../models/fileModel.js";

export const fileUploadController = async (req, res) => {
  try {
    const path = req.file.path;
    const name = req.file.originalname;

    const newFile = await new fileModel({ path: path, name: name }).save();

    res
      .status(200)
      .json({ path: `http://localhost:8000/api/v1/file/file/${newFile._id}` });
  } catch (error) {
    res.status(404).send({
      error: "Somthing went wrong",
    });
  }
};

export const downloadFile = async (req, res) => {
  try {
    const file = await fileModel.findById(req.params.fileId);
    if (!file) {
      return res.status(400).send("Invalid Link");
    }

    file.downloadContent++;

    await file.save();

    res.download(file.path, file.name);
  } catch (error) {
    res.status(404).send({
      error: "Somthing went wrong",
    });
  }
};
