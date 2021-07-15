const asyncHandler = require('express-async-handler');

const createOrderByImage = asyncHandler(async(req,res) => {
    console.log(req.body);
    try {
        res.json({
            key: "Khusbo",
            value: "rice",
            url: "https://digitalistic.co/app/product/1",
        })
       
    } catch (error) {
        res.json({message: error});
    }   
  })
  module.exports = {
      createOrderByImage
  }