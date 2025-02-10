import { userProfileModel } from "../postgres/db.js";

export const getAllProfiles = async (req, res) => {
    try {
        const profiles = await userProfileModel.findAll();
        if (profiles.length === 0) {
            return res.status(404).json({ "error": "User profiles not found" });
        }
        return res.status(200).json(profiles);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error" });
    }
};

export const addProfile = async (req, res) => {
    const { userId } = req.body;
    try {
        const profile = await userProfileModel.findOne({ where: { userId } });
        if (!profile) {
            await userProfileModel.create(req.body);
            return res.status(201).json({ message: "Profile added successfully" });
        }
        return res.status(200).json({ message: "Profile already exists" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal server error" });
    }
};

const updateProfile = async (req, res) => {
    try {
        const userId = req.params.userId;
        const body = req.body;
        const oldProfile = await userProfileModel.findOne({ where: { userId } });
        if (!oldProfile) {
            return res.status(404).send({ message: "User profile not found" });
        }
        oldProfile.address = body.address || oldProfile.address;
        oldProfile.phoneNumber = body.phoneNumber || oldProfile.phoneNumber;
        oldProfile.gender = body.gender || oldProfile.gender;
        oldProfile.dateOfBirth = body.dateOfBirth || oldProfile.dateOfBirth;
        oldProfile.profilePictureURL = body.profilePictureURL || oldProfile.profilePictureURL;
        await oldProfile.save();
        res.status(200).send({ data: oldProfile, message: "Profile updated successfully" });
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Failed to update profile" });
    }
};

const deleteProfileById = async (req, res) => {
    try {
        const userId = req.params.userId;
        const oldProfile = await userProfileModel.findOne({ where: { userId } });
        if (!oldProfile) {
            return res.status(404).send({ message: "User profile not found" });
        }
        await oldProfile.destroy();
        res.status(200).send({ message: "Profile deleted successfully" });
    } catch (e) {
        res.status(500).json({ error: "Failed to delete profile" });
    }
};

const getProfileById = async (req, res) => {
    try {
        const userId = req.params.userId;
        const profile = await userProfileModel.findOne({ where: { userId } });
        if (!profile) {
            return res.status(404).send({ message: "User profile not found" });
        }
        res.status(200).send({ message: "Profile fetched successfully", data: profile });
    } catch (e) {
        res.status(500).json({ error: "Failed to fetch profile" });
    }
};

export const userProfileController = {
    getAllProfiles,
    addProfile,
    getProfileById,
    deleteProfileById,
    updateProfile
};
