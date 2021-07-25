const mongoose = require("mongoose");

const newtransactionSchema = new mongoose.Schema(
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
        duedate: {
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
const NewTransactionData= mongoose.model("NewTransactionData",newtransactionSchema);
module.exports = NewTransactionData;