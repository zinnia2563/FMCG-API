const asyncHandler = require('express-async-handler');

const CashBox = require("../Model/CashboxModel");


const createData = asyncHandler(async(req,res) => {
    console.log(req.body);
  const cash = new CashBox({
      Date: req.body.Date,
      DayendCash: req.body.DayendCash,
      WithdrawCash: req.body.WithdrawCash,
      Depositcash: req.body.Depositcash,
  });
  try {
      const createdData = await cash.save();
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
        const result = await CashBox.find();
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