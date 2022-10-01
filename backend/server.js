const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middlewares/errorMiddleware");
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

/**
 * Override express default errorHandler
 */
app.use(errorHandler);

app.listen(port, () => console.log(`Server stated on port ${port}`));
