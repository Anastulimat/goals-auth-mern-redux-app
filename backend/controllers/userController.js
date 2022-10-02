const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");

/**
 * @route   POST /api/users
 *
 * @param   {*} req
 * @param   {*} res
 *
 * @desc    Regestir a new user
 * @acces   public
 */
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error("Please add all fields !");
    }

    // Check if user exists
    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error("User already exsits");
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error("Invalid user data");
    }
});

/**
 * @route   POST /api/users/login
 *
 * @param   {*} req
 * @param   {*} res
 *
 * @desc    Authenticate a user
 * @acces   public
 */
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check for user email
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(400);
        throw new Error("Invalid credentials");
    }
});

/**
 * @route   Get /api/users/me
 *
 * @param   {*} req
 * @param   {*} res
 *
 * @desc    Get user data
 * @acces   public
 */
const getMe = asyncHandler(async (req, res) => {
    res.json({ message: "User data display" });
});

module.exports = {
    registerUser,
    loginUser,
    getMe,
};
