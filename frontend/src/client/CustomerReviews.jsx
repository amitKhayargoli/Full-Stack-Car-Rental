import React from "react";
import Button from "../components/Button";
import axios from "axios";

const handleSubmit = (event) => {
  event.preventDefault();

  const profilePicURL = localStorage.getItem("profilePicURL");
  const id = localStorage.getItem("userId");
  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const review = document.getElementById("review").value;

  console.log({ id, username, email, review, profilePicture });
  axios
    .post("http://localhost:5000/api/customerReview", {
      id,
      username,
      email,
      review,
      profilePicURL,
    })
    .then((response) => {
      console.log("Response:", response);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

const CustomerReviews = () => {
  const inputFieldClassnames =
    "xl:!text-2xl !text-[12px] xl:w-full w-[50%] font-bold focus:outline-none text-black dark:text-white dark:bg-black dark:border-1 bg-gray-200 !p-5";

  return (
    <div className="bg-white dark:bg-black h-[calc(88vh)] w-full !p-6 xl:!p-12">
      <form className="dark:text-white flex flex-col items-center gap-4 xl:gap-8 xl:!px-12">
        <h2 className="!text-xl xl:!text-4xl">Customer Review</h2>

        <div className="flex gap-5 xl:gap-12 xl:w-full">
          <input
            className={inputFieldClassnames}
            type="text"
            id="name"
            placeholder="Name"
          />
          <input
            className={inputFieldClassnames}
            type="text"
            id="email"
            placeholder="a1995@gmail.com"
          />
        </div>

        <textarea
          className={`${inputFieldClassnames} xl:w-full xl:h-[300px] h-60 w-full !my-2`}
          id="review"
          placeholder="Add your testimonial here"
        ></textarea>

        <Button title="Add Review" type="button" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default CustomerReviews;
