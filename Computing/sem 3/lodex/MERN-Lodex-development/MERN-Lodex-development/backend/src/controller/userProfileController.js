const UserProfile = require("../model/userProfileSchema");
const Users = require("../model/userSchema");

const createUserProfile = async (req, res) => {
  try {
    const {
      userId,
      address,
      phoneNumber,
      gender,
      dateOfBirth,
      profilePictureURL,
    } = req.body;

    const user = await Users.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const existingProfile = await UserProfile.findOne({ where: { userId } });
    if (existingProfile) {
      return res.status(400).json({ message: "Profile already exists" });
    }

    const userProfile = await UserProfile.create({
      userId,
      address,
      phoneNumber,
      gender,
      dateOfBirth,
      profilePictureURL,
    });

    res
      .status(201)
      .json({ message: "User Profile created", data: userProfile });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating profile", error: error.message });
  }
};

const getUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const userProfile = await UserProfile.findOne({
      where: { userId },
      include: {
        model: Users,
        as: "user",
      },
    });

    if (!userProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res
      .status(200)
      .json({ message: "User Profile retrieved", data: userProfile });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching profile", error: error.message });
  }
};

const updateUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const { address, phoneNumber, gender, dateOfBirth, profilePictureURL } =
      req.body;

    const userProfile = await UserProfile.findOne({ where: { userId } });

    if (!userProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    await userProfile.update({
      address,
      phoneNumber,
      gender,
      dateOfBirth,
      profilePictureURL,
    });

    res
      .status(200)
      .json({ message: "User Profile updated", data: userProfile });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating profile", error: error.message });
  }
};

const deleteUserProfile = async (req, res) => {
  try {
    const { userId } = req.params;
    const userProfile = await UserProfile.findOne({ where: { userId } });

    if (!userProfile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    await userProfile.destroy();
    res.status(200).json({ message: "User Profile deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting profile", error: error.message });
  }
};

module.exports = {
  createUserProfile,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
};
