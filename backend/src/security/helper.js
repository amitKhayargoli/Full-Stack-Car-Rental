// import fs from "fs";
const fs = require("fs");

const createUploadsFolder = () => {
  const dir = "./uploads";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log("Uploads folder created.");
  }
};

module.exports = { createUploadsFolder };
