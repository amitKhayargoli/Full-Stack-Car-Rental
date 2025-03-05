import { useContext, useEffect, useState } from "react";
import "./Booking.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { UserContext } from "./components/UserContext";

const Settings = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const { setProfilePicture } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [fileName, setFileName] = useState("");
  const userId = localStorage.getItem("userId");

  const inputClassNames =
    "!bg-[#e5e7eb] dark:!bg-black !b-black dark:!b-[#ffffff2c]";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (userId) {
      fetchUserProfile(userId);
    }
  }, [userId]);

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
      if (error.response && error.response.status === 404) {
        console.log("User profile not found, creating new profile...");
        setUserData(null);
      } else {
        console.error("Error fetching profile:", error);
      }
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      const imageUrl = URL.createObjectURL(file);
      setUserData((prev) => ({ ...prev, profilePictureURL: imageUrl }));
    }
  };

  const onSubmit = async (formData) => {
    try {
      let imageUrl = "";

      if (selectedFile) {
        const data = new FormData();
        data.append("file", selectedFile);

        const uploadResponse = await axios.post(
          "http://localhost:5000/api/file/upload",
          data,
          { headers: { "Content-Type": "multipart/form-data" } }
        );

        imageUrl = "http://localhost:5000/" + uploadResponse.data.file.path;
      }

      const profileData = {
        userId,
        ...formData,
        profilePictureURL: imageUrl,
      };

      await axios.post(`http://localhost:5000/api/userProfile`, profileData);
      toast.success("Profile created successfully!");

      setProfilePicture(imageUrl);
    } catch (error) {
      console.error("Error creating profile:", error);
      toast.error(error.response?.data?.error || "An error occurred");
    }
  };

  return (
    <div className="second">
      <div className="settings !bg-white !text-black dark:!text-white dark:!bg-black">
        <h2>Settings</h2>
        <h2>Profile</h2>
        <p>Update your profile here</p>

        <form onSubmit={handleSubmit(onSubmit)} className="form flex flex-wrap">
          <div className="flex-1 flex flex-col gap-5">
            <div className="info">
              <label htmlFor="address">Address</label>
              <input
                className={inputClassNames}
                type="text"
                id="address"
                {...register("address")}
              />
            </div>

            <div className="info">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                {...register("email")}
                className={inputClassNames}
              />
            </div>

            <div className="info">
              <label htmlFor="phoneNo">Phone Number</label>
              <input
                type="text"
                {...register("phoneNumber")}
                className={inputClassNames}
              />
            </div>

            <div className="info">
              <label htmlFor="gender">Gender</label>
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

            <button
              type="submit"
              className="flex bg-[#3e3ea8] transition-all duration-400 ease-in hover:bg-[#4848c7] text-white text-base !px-5 !py-3 outline-none rounded w-max cursor-pointer mx-auto font-[sans-serif]"
            >
              Submit
            </button>
          </div>

          <div className="flex flex-1 justify-center relative bottom-20">
            <label
              htmlFor="fileUpload"
              className="cursor-pointer h-[500px] w-[500px] rounded-full overflow-hidden"
            >
              <img
                className="object-cover h-full w-full"
                src={userData?.profilePictureURL || "/default-profile.png"}
                alt="Profile"
              />
            </label>
            <input
              type="file"
              id="fileUpload"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
