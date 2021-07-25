const mongoose = require("mongoose");

const cashboxSchema = new mongoose.Schema(
    {
        Date: {
            type: String
        },
        DayendCash: {
            type: String
        },
        WithdrawCash: {
          type: String,
        },
        Depositcash: {
          type: String,
        },
    },

    {
        timestamps: true,
    }
);
const CashboxData = mongoose.model("CashboxData", cashboxSchema);
module.exports = CashboxData;