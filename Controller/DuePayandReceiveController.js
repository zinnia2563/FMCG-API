const asyncHandler = require('express-async-handler');

const DuePayandReceive = require("../Model/DuePayandReceiveModel");

const createData = asyncHandler(async(req,res) => {
    const due = new DuePayandReceive({

        accounttype:req.body.accounttype,

        transactiontype: req.body.transactiontype,
    
        clientname: req.body.clientname,
    
        clientmobile: req.body. clientmobile,
    
        clientamount: req.body. clientamount,
    
        date: req.body. duedate,
    
        currentdate:req.body.currentdate,
    });
    try {
        const createdData = await due.save();
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
          const result = await DuePayandReceive.find();
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
