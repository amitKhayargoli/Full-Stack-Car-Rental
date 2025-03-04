import axios from "axios";
import { Bookmark, BookmarkIcon, Heart } from "lucide-react";
import React, { useEffect, useState } from "react";

const Search = ({ isSidebarCollapsed, setSidebarCollapsed }) => {
  const textClassNames = "dark:text-gray-50";

  const [cars, setCars] = useState([]);

  const [query, setQuery] = useState("");
  const [filteredcars, setFilteredCars] = useState([]);

  const typeArray = ["Auto", "Fuel"];

  const [brandArray, setBrandArray] = useState([]);

  const [availableCars, setAvailableCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/Car");
        console.log(response.data.data);

        const carData = response.data.data;
        setCars(carData);

        const available = carData.filter(
          (car) => car.bookingStatus === "Available"
        );
        setAvailableCars(available);

        console.log(available);

        setFilteredCars(available);
        console.log(filteredcars);

        const brand = available.map((car) => car.brand);

        setBrandArray(brand);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };
    fetchCars();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    const filtered = availableCars.filter((item) =>
      item.model.toLowerCase().includes(value)
    );

    setFilteredCars(filtered);

    // console.log(filteredcars);
    // console.log(filtered);
  };

  const handleFilterBrand = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery("");

    const filtered = availableCars.filter((item) =>
      item.brand.toLowerCase().includes(value)
    );

    setFilteredCars(filtered);

    // console.log(filteredcars);
    // console.log(filtered);
  };

  const handleFilterType = (e) => {
    const value = e.target.value.toLowerCase();

    const filtered = availableCars.filter((item) =>
      item.type.toLowerCase().includes(value)
    );

    setFilteredCars(filtered);

    // console.log(filteredcars);
  };

  return (
    <div className="w-full min-h-screen bg-[#f9f9f9] dark:bg-black !px-8 !py-5">
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
            onChange={handleFilterType}
          >
            {typeArray.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-2">
          <h1 className={textClassNames}>Brand</h1>

          <select
            className="text-[12px] xl:text-[16px] focus:outline-none bg-white drop-shadow-xl w-full h-10 !p-3 !px-2"
            name=""
            id=""
            onChange={handleFilterBrand}
          >
            {brandArray.map((brands) => (
              <option value={brands} key={brands}>
                {brands}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-3">
          <h1 className={textClassNames}>Search</h1>
          <input
            value={query}
            onChange={handleSearch}
            placeholder="Search by Model "
            className="text-[12px] xl:text-[16px] focus:outline-none bg-white drop-shadow-xl w-full h-10 !p-3 !px-4"
          />
        </div>
      </div>

      <div className="!mt-6 bg-white h-[550px] rounded-2xl xl:!p-5 dark:bg-black dark:text-white">
        {/* <h1 className="font-bold text-xl">270 Cars found</h1> */}

        {/* Car Section */}

        <div className="flex gap-6 w-full flex-wrap">
          {/* Car Card */}
          {filteredcars.map((car) => (
            <div
              className={` flex flex-col !p-3 bg-[#f9f9f9] w-[45%] sm:max-w-[30%] min-md:w-[22.5%]  dark:bg-gray-500 rounded-xl`}
            >
              <img
                className="object-contain flex flex-1 "
                alt="car Image"
                src={car.carImageURL}
                // src="https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=pexels-pixabay-210019.jpg&fm=jpg"
              />

              <div className="flex justify-between items-center !mb-3">
                <h1 className="font-bold text-sm xl:text-[18px]">
                  {car.model}
                </h1>
                <button>
                  <BookmarkIcon />
                </button>
              </div>

              <div className="flex flex-wrap text-[13px] xl:text-sm gap-2 xl:gap-2 xl:justify-around">
                <div>
                  Speed:
                  <b>{car.speed}</b>
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
