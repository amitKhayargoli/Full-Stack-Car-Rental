import { Trash2 } from "lucide-react";
import React from "react";
import { ToolTip } from "./components/Tooltip";

import Tick from "./img/tick.png";
import Cross from "./img/cross.png";
const AdminActiveBids = () => {
  const cars = [{ carImageUrl: "" }];

  const item = {
    name: "Amit",
    image:
      "https://static.displate.com/857x1200/displate/2024-11-06/27c494dc5fee5ab78ab2b302c608db40_695143690b63d64ae618103abae0dc2f.jpg",
  };

  return (
    <div className="!p-8 dark:bg-black bg-white h-screen">
      <h1 className="dark:text-white text-2xl font-bold">Active Bids</h1>

      <div className="flex gap-6 w-full flex-wrap  ">
        {/* Car Card */}
        {cars.map((car) => (
          <div className="relative !p-4 bg-[#f9f9f9] text-black dark:text-white dark:bg-[#1d1b30] xl:w-[40%] rounded-xl">
            <img
              className="w-full object-contain h-[300px]"
              alt="car Image"
              // src={car.carImageURL}

              // src="https://static.displate.com/857x1200/displate/2024-11-06/27c494dc5fee5ab78ab2b302c608db40_695143690b63d64ae618103abae0dc2f.jpg"
            />

            <div className="flex justify-between !items-center xl:h-7 !mb-3">
              <div className="flex items-center ">
                <ToolTip item={item}></ToolTip>
                <h1 className="font-bold text-sm xl:text-xl !mt-3 !px-5">
                  {/* {car.model.toUpperCase()} */}
                  FORD MUSTANG
                </h1>
              </div>

              <div className="flex gap-2 items-center">
                <img className="w-10 h-10 cursor-pointer" src={Cross} alt="" />
                <img className="w-12 cursor-pointer" src={Tick} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminActiveBids;
