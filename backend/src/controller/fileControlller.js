const uploadFile = (req, res) => {
  // console.log(req.file);
  // console.log("File uploading");
  // try {
  //   if (!req.file) {
  //     return res.status(400).json({ message: "No file uploaded" });
  //   }
  //   res
  //     .status(200)
  //     .json({ message: "File uploaded successfully!", file: req.file });
  // } catch (error) {
  //   res
  //     .status(500)
  //     .json({ message: "Error uploading file", error: error.message });
  // }

  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const fileUrl = `http://localhost:5000/uploads/${req.file.filename}`;

  console.log("Uploaded file URL:", fileUrl);
  res.json({ fileUrl });
};

module.exports = { uploadFile };
