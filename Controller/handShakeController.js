const asyncHandler = require('express-async-handler');

const Handshake = require("../Model/handShakeModel");


const createData = asyncHandler(async(req,res) => {
  const handshake = new Handshake({
      deviceid: req.body.deviceid,
      fcmtoken: req.body.fcmtoken,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
  });
  try {
      const createdData = await handshake.save();
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
        //it will return just last added item only one item as limit is 1
        const result = await Handshake.find().sort({_id:1}).limit(1);;
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