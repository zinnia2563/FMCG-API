const asyncHandler = require('express-async-handler');

const Expense = require("../Model/ExpenseModel");


const createData = asyncHandler(async(req,res) => {
    const expense = new Expense({
        rent: req.body.rent,

        salary: req.body.salary,

        others: req.body.others,

        currentdate: req.body.currentdate,
    });
    try {
        const createdData = await expense.save();
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
          const result = await Expense.find();
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