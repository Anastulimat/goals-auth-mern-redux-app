const asyncHandler = require("express-async-handler");

/**
 * @route   GET /api/goals
 *
 * @param   {*} req
 * @param   {*} res
 *
 * @desc    Get all goals
 * @acces   private
 */
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Get goals",
    });
});

/**
 * @route   POST /api/goals
 *
 * @param   {*} req
 * @param   {*} res
 *
 * @desc    Set or create a goal
 * @acces   private
 */
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400);
        throw new Error("Please add a text field !");
    }

    res.status(201).json({
        message: "Set goal",
    });
});

/**
 * @route   PUT /api/goals/:id
 *
 * @param   {*} req
 * @param   {*} res
 *
 * @desc    Update a goal
 * @acces   private
 */
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Update goal ${req.params.id}`,
    });
});

/**
 * @route   DELETE /api/goals/:id
 *
 * @param   {*} req
 * @param   {*} res
 *
 * @desc    Delete a goal
 * @acces   private
 */
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: `Delete goal ${req.params.id}`,
    });
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
};
