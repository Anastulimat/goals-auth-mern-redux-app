/**
 * @route   POST /api/users
 *
 * @param   {*} req
 * @param   {*} res
 *
 * @desc    Regestir a new user
 * @acces   public
 */
const registerUser = (req, res) => {
    res.json({ message: "Register User" });
};

/**
 * @route   POST /api/users/login
 *
 * @param   {*} req
 * @param   {*} res
 *
 * @desc    Authenticate a user
 * @acces   public
 */
const loginUser = (req, res) => {
    res.json({ message: "Login User" });
};

/**
 * @route   Get /api/users/me
 *
 * @param   {*} req
 * @param   {*} res
 *
 * @desc    Get user data
 * @acces   public
 */
const getMe = (req, res) => {
    res.json({ message: "User data display" });
};

module.exports = {
    registerUser,
    loginUser,
    getMe,
};
