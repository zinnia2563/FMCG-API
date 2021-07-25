const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
    {
        rent: {
            type: String
        },
        salary: {
            type: String
        },
        others: {
          type: String,
        },
        currentdate: {
          type: String,
        },
    },

    {
        timestamps: true,
    }
);
const ExpenseData = mongoose.model("ExpenseData", expenseSchema);
module.exports = ExpenseData;