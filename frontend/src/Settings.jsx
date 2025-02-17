import { useEffect, useState } from "react";
import "./Booking.css";
import uploadFile from "./components/UploadFile";
import { useForm } from "react-hook-form";
import axios from "axios";

const Settings = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const Id = localStorage.getItem("userId");
  const [userId, setUserId] = useState(Id);
  const [fileName, setFileName] = useState("");

  const [userData, setUserData] = useState(null);

  const inputClassNames =
    "!bg-[#e5e7eb] dark:!bg-black !b-black dark:!b-[#ffffff2c]";

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    if (storedUserId) {
      setUserId(storedUserId);
      fetchUserProfile(storedUserId);
    }
  }, []);

  const fetchUserProfile = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/userProfile/${userId}`
      );
      const { data } = response.data;

      setUserData(data);

      setValue("username", data.user.username);
      setValue("email", data.user.email);
      setValue("role", data.user.role);
      setValue("address", data.address);
      setValue("phoneNumber", data.phoneNumber);
      setValue("gender", data.gender);
      setValue("dateOfBirth", data.dateOfBirth);
      setValue("profilePictureURL", data.profilePictureURL);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Handle Image Upload & Preview
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      setUserData(userData);
    }
  };

  const onSubmit = async (formData) => {
    console.log("Form Data Submitted:", formData);
    try {
      let imageUrl = "";

      if (selectedFile) {
        const data = new FormData(); // Create new FormData
        data.append("file", selectedFile);

        const uploadResponse = await axios.post(
          "http://localhost:5000/api/file/upload",
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        console.log("Upload Response:", uploadResponse.data);
        imageUrl = "http://localhost:5000/" + uploadResponse.data.file.path;
        if (!imageUrl) {
          throw new Error("File URL is missing from response");
        }
      }
      if (userData) {
        await axios.put(
          `http://localhost:5000/api/userProfile/${userId}`,

          {
            ...formData,
            profilePictureURL: imageUrl,
          }
        );
        alert("Profile updated successfully!");
      } else {
        await axios.post(`http://localhost:5000/api/userProfile`, {
          userId,
          ...formData,
          profilePictureURL: imageUrl,
        });
        alert("Profile created successfully!");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <>
      <div className="second ">
        <div className="settings !bg-white !text-black dark:!text-white  dark:!bg-black">
          <h2>Settings</h2>
          <h2>Profile</h2>
          <p>Update your profile here</p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form flex flex-wrap"
          >
            <div className="flex-1 flex flex-col gap-5">
              <div className="info">
                <label htmlFor="address" id="address">
                  Address
                </label>
                <input
                  className={inputClassNames}
                  type="text"
                  id="address"
                  {...register("address")}
                />
              </div>

              <div className="info">
                <label htmlFor="" id="email">
                  Email
                </label>

                <input
                  type="text"
                  {...register("email")}
                  className={inputClassNames}
                />
              </div>

              <div className="info">
                <label htmlFor="" id="phoneNo">
                  Phone Number
                </label>
                <input
                  type="text"
                  {...register("phoneNumber")}
                  className={inputClassNames}
                />
              </div>

              <div className="info">
                <label htmlFor="" id="Gender">
                  Gender
                </label>

                <input
                  type="text"
                  id="gender"
                  className={inputClassNames}
                  {...register("gender")}
                  placeholder="Male"
                />
              </div>

              <div className="info">
                <label htmlFor="dob">Date of birth</label>
                <input
                  type="date"
                  id="dob"
                  {...register("dateOfBirth")}
                  className={inputClassNames}
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
              <button
                type="submit"
                className="flex bg-[#3e3ea8]  transition-all duration-400 ease-in hover:bg-[#4848c7] text-white text-base !px-5 !py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Settings;
