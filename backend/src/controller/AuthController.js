const User = require("../model/userSchema");
const { generateToken } = require("../security/jwt-util");

const login = async (req, res) => {
  try {
    //fetching all the data from users table
    if (req.body.email == null) {
      return res.status(500).send({ message: "email is required" });
    }
    if (req.body.password == null) {
      return res.status(500).send({ message: "email is required" });
    }
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res.status(500).send({ message: "user not found" });
    }
    if (user.password == req.body.password) {
      const token = generateToken({ user: user.toJSON() });
      return res.status(200).send({
        data: { access_token: token, role: user.role, userId: user.userId },

        message: "successfully logged in",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Failed to login" });
  }
};

const init = async (req, res) => {
  try {
    const user = req.user.user;
    delete user.password;
    res
      .status(201)
      .send({ data: user, message: "successfully fetched current  user" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

module.exports = { login, init };
