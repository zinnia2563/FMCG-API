const asyncHandler = require('express-async-handler');

const createOrderByImage = asyncHandler(async(req,res) => {
    console.log(req.body);
    try {
       res.json({
           message: "we have got your request"
       })
    } catch (error) {
        res.json({message: error});
    }   
  })

  module.exports = {
      createOrderByImage
  }