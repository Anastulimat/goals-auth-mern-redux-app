const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: [true, "Please add a text value"],
        },
    },
    {
        // Allows to add createdAt & updatedAt fileds automatically
        timestamps: true,
    }
);

module.exports = mongoose.model("Goal", goalSchema);
