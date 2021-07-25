const asyncHandler = require('express-async-handler');

const NewTransaction = require("../Model/NewTransactionModel");


const createData = asyncHandler(async(req,res) => {
  const newtransaction = new NewTransaction({
      
    accounttype:req.body.accounttype,

    transactiontype: req.body.transactiontype,

    clientname: req.body.clientname,

    clientmobile: req.body. clientmobile,

    clientamount: req.body. clientamount,

    duedate: req.body. duedate,

    currentdate:req.body.currentdate,
  });
  try {
      const createdData = await newtransaction.save();
      res.json({
          message : "created successfully",
          body: createdData
      });
  } catch (error) {
      res.json({message: error});
  }   
})

const getData = asyncHandler(async(req,res)=>{
    try {
        const result = await NewTransaction.find();
        res.json({
            message: "data get succesfully",
            data: result
        });

    } catch (error) {
        
    }
})

module.exports = {
   createData,
   getData,
} 