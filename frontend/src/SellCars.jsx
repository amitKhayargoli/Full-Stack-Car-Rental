import React, { useState } from "react";
import axios from "axios";
import "./Sellcar.css";
import Upload from "./Upload";
import { ChromePicker } from "react-color";
import UploadFile from "./components/UploadFile";
const CarForm = () => {
  const [carData, setCarData] = useState({
    model: "",
    brand: "",
    color: "",
    price: "",
    type: "",
    year: "",
    speed: "",
    carImageURL: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const [fileName, setFileName] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({ ...carData, [name]: value });
  };

  // Handle Image Upload & Preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      // const previewURL = URL.createObjectURL(file);
      setCarData({ ...carData, carImageURL: previewURL });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let imageUrl = carData.carImageURL;

      // 🔹 Upload file if selected
      if (selectedFile) {
        const formData = new FormData();
        formData.append("file", selectedFile);

        const uploadResponse = await axios.post(
          "http://localhost:5000/api/file/upload",
          formData,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        console.log("Upload Response:", uploadResponse.data);
        imageUrl = uploadResponse.data.fileUrl;
        if (!imageUrl) {
          throw new Error("File URL is missing from response");
        }
      }

      // 🔹 Send car data with the correct `carImageURL`
      const response = await axios.post("http://localhost:5000/Car", {
        ...carData,
        carImageURL: imageUrl,
        bookingStatus: false,
      });

      alert(response.data.message);
      setCarData({
        model: "",
        brand: "",
        color: "",
        price: "",
        type: "",
        year: "",
        speed: "",
        carImageURL: "",
      });
      setSelectedFile(null);
    } catch (error) {
      console.error("Error adding car:", error);
    }
  };

  return (
    <div className="car-form-container w-full">
      <div className="form-content ">
        <h1>Add New Car</h1>
        <form
          className="form w-full flex-wrap xl:flex-row"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col flex-1 ">
            <div className="info">
              <label htmlFor="model">Car Model</label>
              <input
                type="text"
                name="model"
                value={carData.model}
                onChange={handleChange}
                required
              />
            </div>
            <div className="info">
              <label htmlFor="brand">Car Brand</label>
              <input
                type="text"
                name="brand"
                value={carData.brand}
                onChange={handleChange}
                required
              />
            </div>
            <div className="info">
              <label htmlFor="color">Color</label>
              <input
                className="!h-12 w-full"
                type="color"
                name="color"
                value={carData.color || "#4848c7"}
                onChange={handleChange}
                required
              />
            </div>
            <div className="info">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                value={carData.price}
                onChange={handleChange}
                required
              />
            </div>
            <div className="info">
              <label htmlFor="speed">Speed</label>
              <input
                type="number"
                name="speed"
                value={carData.speed}
                onChange={handleChange}
                required
              />
            </div>
            <div className="info">
              <label htmlFor="type">Car Type</label>
              <input
                type="text"
                name="type"
                value={carData.type}
                onChange={handleChange}
                required
              />
            </div>
            <div className="info">
              <label htmlFor="year">Year of Manufacture</label>
              <input
                type="number"
                name="year"
                value={carData.year}
                onChange={handleChange}
                min="1900"
                max={new Date().getFullYear()}
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-8 flex-1 justify-center items-center">
            <div className="w-full h-[60%] !p-6 xl:w-[500px] xl:h-[300px] flex flex-col-reverse  gap-2 items-center justify-center border-2 border-gray-700 rounded-3xl border-dashed ">
              <label
                htmlFor="carImage"
                class="flex bg-[#3e3ea8]  transition-all duration-400 ease-in hover:bg-[#4848c7] text-white text-base !px-5 !py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 mr-2 fill-white inline"
                  viewBox="0 0 32 32"
                >
                  <path
                    d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
                    data-original="#000000"
                  />
                  <path
                    d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
                    data-original="#000000"
                  />
                </svg>
                Upload Image
                <input
                  type="file"
                  id="carImage"
                  class="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>

              <p className="!text-sm text-gray-500">
                PNG, JPG SVG, WEBP, and GIF are Allowed.
              </p>

              {fileName && <p>{fileName}</p>}
            </div>

            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarForm;
