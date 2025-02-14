import React from "react";
import darkBG from "../img/ReviewBG.jpg";
import Button from "../components/Button";

const CustomerReviews = () => {
  const inputFieldClassnames =
    "xl:!text-2xl !text-[12px] xl:w-full w-[50%]   font-bold focus:outline-none text-black dark:text-white dark:bg-black dark:border-1 bg-gray-200 !p-5 ";
  return (
    <div className=" bg-white  dark:bg-black h-[calc(88vh)] w-full !p-6 xl:!p-12">
      <form
        action=""
        className="dark:text-white flex flex-col items-center gap-4 xl:gap-8  xl:!px-12"
      >
        <h2 className="!text-xl xl:!text-4xl ">Customer Review</h2>
        <div className="flex gap-5 xl:gap-12 xl:w-full">
          <input
            className={inputFieldClassnames}
            type="text"
            placeholder="Name"
          />
          <input
            className={inputFieldClassnames}
            type="text"
            placeholder="a1995@gmail.com"
          />
        </div>

        <textarea
          className={`${inputFieldClassnames} xl:w-full xl:h-[300px] h-60 w-full !my-2`}
          name=""
          id=""
          placeholder="Add your testimonial here"
        ></textarea>

        <Button></Button>
      </form>
    </div>
  );
};

export default CustomerReviews;
