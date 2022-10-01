/**
 * @route   GET /api/goals
 *
 * @param   {*} req
 * @param   {*} res
 *
 * @desc    Get all goals
 * @acces   private
 */
const getGoals = (req, res) => {
    res.status(200).json({
        message: "Get goals",
    });
};

/**
 * @route   POST /api/goals
 *
 * @param   {*} req
 * @param   {*} res
 *
 * @desc    Set or create a goal
 * @acces   private
 */
const setGoal = (req, res) => {
    console.log(req.body);
    res.status(201).json({
        message: "Set goal",
    });
};

/**
 * @route   PUT /api/goals/:id
 *
 * @param   {*} req
 * @param   {*} res
 *
 * @desc    Update a goal
 * @acces   private
 */
const updateGoal = (req, res) => {
    res.status(200).json({
        message: `Update goal ${req.params.id}`,
    });
};

/**
 * @route   DELETE /api/goals/:id
 *
 * @param   {*} req
 * @param   {*} res
 *
 * @desc    Delete a goal
 * @acces   private
 */
const deleteGoal = (req, res) => {
    res.status(200).json({
        message: `Delete goal ${req.params.id}`,
    });
};

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
};
