const mongoose = require("mongoose");

const duepayandreceiveSchema = new mongoose.Schema(
    {
        accounttype: {
            type: String
        },
        transactiontype: {
            type: String
        },
        clientname: {
          type: String
        },
        clientmobile: {
          type: String
        },
        clientamount:{
            type: String
        },
        date: {
            type: String
        },
       currentdate: {
            type: String
    },
},

    {
        timestamps: true,
    }
);
const DuePayandReceiveData = mongoose.model("DuePayandReceiveData", duepayandreceiveSchema);
module.exports = DuePayandReceiveData;