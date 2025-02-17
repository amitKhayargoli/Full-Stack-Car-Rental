import React from "react";
import Button from "../components/Button";
import axios from "axios";

import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const CustomerReviews = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const profilePictureURL = localStorage.getItem("profilePicURL");

    console.log(profilePictureURL);

    const formData = { ...data, profilePictureURL };

    console.log(formData);
    axios
      .post("http://localhost:5000/api/customerReview", formData)
      .then((response) => {
        console.log("Response:", response);
        toast.success("Testimonial Added successfully");
      })
      .catch((error) => {
        toast.error("Duplicate emails arent allowed");
        console.log("Error:", error);
      });
  };

  const inputFieldClassnames =
    "xl:!text-2xl !text-[12px] xl:w-full  w-[50%] font-bold focus:outline-none text-black dark:text-white dark:bg-black dark:border-1 bg-gray-200 !p-5";

  return (
    <div className="h-[100vh] bg-white dark:bg-black w-full !p-6 xl:!p-12">
      <form
        className="dark:text-white flex flex-col items-center gap-4 xl:gap-8 xl:!px-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="!text-xl xl:!text-4xl">Customer Review</h2>

        <div className="flex gap-5 xl:gap-12 xl:w-full">
          <input
            className={inputFieldClassnames}
            type="text"
            {...register("username")}
            placeholder="Name"
            required
          />
          <input
            className={inputFieldClassnames}
            type="text"
            id="email"
            {...register("email")}
            required
            placeholder="a1995@gmail.com"
          />
        </div>

        <textarea
          className={`${inputFieldClassnames} xl:w-full xl:h-[300px] h-60 w-full !my-2`}
          id="review"
          required
          {...register("review")}
          placeholder="Add your testimonial here"
        ></textarea>

        <Button title="Add Review" type="submit" />
      </form>

      <ToastContainer></ToastContainer>
    </div>
  );
};

export default CustomerReviews;
