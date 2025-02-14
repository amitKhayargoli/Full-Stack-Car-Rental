import axios from "axios";
import { Bookmark, BookmarkIcon, Heart } from "lucide-react";
import React, { useEffect, useState } from "react";

const Search = () => {
  const textClassNames = "dark:text-gray-50";

  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/Car");
        console.log(response.data.data);

        const carData = response.data.data;
        setCars(carData);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
  }, []);

  return (
    <div className="w-full h-[100vh] bg-[#f9f9f9] dark:bg-black !px-8 !py-5">
      <div className="flex flex-col gap-[1px]">
        <h1 className="dark:text-gray-50 font-bold text-2xl">Search</h1>
        <p className="dark:text-gray-50">
          Search the latest cars Available here.
        </p>
      </div>

      <div className="flex gap-2 xl:gap-8">
        <div className="flex flex-col flex-2 ">
          <h1 className={textClassNames}>Type</h1>

          <select
            className="text-[12px] xl:text-[16px] focus:outline-none bg-white drop-shadow-xl h-10 !p-3 !px-2"
            name=""
            id=""
          >
            <option value="">All Cars</option>
            <option value="">All Cars</option>
            <option value="">All Cars</option>
            <option value="">All Cars</option>
          </select>
        </div>
        <div className="flex-2">
          <h1 className={textClassNames}>Brand</h1>

          <select
            className="text-[12px] xl:text-[16px] focus:outline-none bg-white drop-shadow-xl w-full h-10 !p-3 !px-2"
            name=""
            id=""
          >
            <option value="">All Cars</option>
            <option value="">All Cars</option>
            <option value="">All Cars</option>
            <option value="">All Cars</option>
          </select>
        </div>
        <div className="flex-3">
          <h1 className={textClassNames}>Search</h1>
          <input
            placeholder="Search by Model "
            className="text-[12px] xl:text-[16px] focus:outline-none bg-white drop-shadow-xl w-full h-10 !p-3 !px-4"
          />
        </div>
      </div>

      <div className="!mt-6 bg-white h-[550px] rounded-2xl xl:!p-5 dark:bg-black dark:text-white">
        <h1 className="font-bold text-xl">270 Cars found</h1>

        {/* Car Section */}

        <div className="flex gap-6 w-full flex-wrap">
          {/* Car Card */}
          {cars.map((car) => (
            <div className="!p-3 bg-[#f9f9f9] w-[45%] sm:max-w-[30%] min-md:w-[22.5%]  dark:bg-gray-500 rounded-xl">
              <img
                className="w-full object-cover "
                alt="car Image"
                src={car.carImageURL}
                // src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg"
                // src="https://pngimg.com/d/porsche_PNG10622.png"
              />

              <div className="flex justify-between items-center xl:!ml-2 !mb-3">
                <h1 className="font-bold text-sm xl:text-xl">{car.model}</h1>
                <button>
                  <BookmarkIcon />
                </button>
              </div>

              <div className="flex flex-wrap text-[13px] xl:text-sm gap-2 xl:gap-2 xl:justify-around">
                <div>
                  Brand:
                  <b>{car.brand}</b>
                </div>
                <div>
                  Type:
                  <b>{car.type}</b>
                </div>
                <div>
                  Price:
                  <b className="text-green-500">{car.price}$</b>
                </div>
              </div>

              {/* <h1 className="text-green-500 font-bold text-2xl">$100</h1> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
