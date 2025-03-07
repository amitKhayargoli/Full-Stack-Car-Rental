import { Mail, MapPin, Phone, User2 } from "lucide-react";
import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const iconClassNames = "text-black dark:text-white !ml-1 !mr-2";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hllio1c", "template_dxx8mxi", form.current, {
        publicKey: "2GdlRlqRBknuC2MzC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Email sent successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className=" bg-white dark:bg-black min-h-screen flex flex-col-reverse xl:flex-row">
      <div className="flex !p-10 ">
        <div className="  !p-3 rounded-3xl">
          <h2 className="dark:text-white !text-xl">Lodex Automotive Inc.</h2>

          <div className="flex flex-col-reverse xl:flex-col gap-2">
            <span className="flex">
              <MapPin
                strokeWidth={2}
                className="text-black dark:text-white !mr-3"
              ></MapPin>
              <h1>Ghattekulo, Maitidevi, Kathmandu</h1>
            </span>

            <div className="flex">
              <Phone
                strokeWidth={2}
                className={iconClassNames}
                size={25}
              ></Phone>
              <h1 className="dark:text-white">+9779841994605</h1>
            </div>

            <div className="flex">
              <Phone
                strokeWidth={2}
                className={iconClassNames}
                size={25}
              ></Phone>
              <h1 className="dark:text-white">+9779824568385</h1>
            </div>

            <div className="flex">
              <Mail
                strokeWidth={2}
                className="text-black dark:text-white !ml-1 !mr-4"
                size={25}
              ></Mail>
              <h1 className="dark:text-white">lodex299@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-950 dark:text-white  !p-9 !pl-15 flex-1">
        <h1 className="text-4xl font-bold  ">
          Lets
          <span className="!ml-2">Talk</span>
        </h1>

        <h2>Send us your queries right now.</h2>

        <form ref={form} onSubmit={sendEmail} className=" xl:!mt-12 ">
          <div className="xl:flex xl:gap-12 ">
            <div className="xl:w-[40%] !mb-4 xl:!mb-0">
              <label htmlFor="">Name</label>

              <div className="flex !p-4 items-center !mt-2 bg-gray-200 dark:bg-black dark:border-[#16151a] dark:border-2  h-10 rounded-xl">
                <User2 size={20} className="!mr-2"></User2>
                <input
                  type="text"
                  required
                  className="focus:outline-none"
                  placeholder="Bhusan Bam"
                  name="from_name"
                />
              </div>
            </div>

            <div className="xl:w-[40%]">
              <label htmlFor="">What are you looking for?</label>

              <div className="flex !p-4 items-center !mt-2 bg-gray-200 dark:bg-black dark:border-[#16151a] dark:border-2  h-10 rounded-xl">
                <input
                  name="subject"
                  type="text"
                  required
                  className="focus:outline-none"
                  placeholder="Delivery Inquiry"
                />
              </div>
            </div>
          </div>

          <div className="xl:flex gap-12 !mt-5">
            <div className="xl:w-[40%] !mb-4 xl:!mb-0">
              <label htmlFor="">Email</label>

              <div className="flex !p-4 items-center !mt-2 bg-gray-200 dark:bg-black dark:border-[#16151a] dark:border-2  h-10 rounded-xl">
                <Mail size={20} className="!mr-2"></Mail>
                <input
                  name="from_email"
                  type="text"
                  required
                  className="focus:outline-none"
                  placeholder="test@gmail.com"
                />
              </div>
            </div>

            <div className="xl:w-[40%]">
              <label htmlFor="">Phone number</label>

              <div className="flex !p-4 items-center !mt-2 bg-gray-200 dark:bg-black dark:border-[#16151a] dark:border-2  h-10 rounded-xl">
                <Phone size={20} className="!mr-2"></Phone>
                <input
                  name="phone_no"
                  type="text"
                  required
                  className="focus:outline-none"
                  placeholder="9818245679"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col !mt-6 ">
            {/* <h1>Write your message here</h1> */}
            <textarea
              name="message"
              className="bg-gray-200 dark:bg-black dark:border-[#16151a] dark:border-2 rounded-md h-[200px] xl:min-h-[300px]  focus:outline-none !p-5"
              id=""
              placeholder="Hey I want to inquire about my car delivery"
            ></textarea>
            <button
              type="submit"
              className="bg-yellow-400 !p-3 !px-5 rounded-xl !mt-6 dark:text-black cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
