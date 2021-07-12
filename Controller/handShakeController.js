const asyncHandler = require('express-async-handler');

const Handshake = require("../Model/handShakeModel");

const getallUser = asyncHandler(async(req,res)=>{
    res.send("i will not work now")
})

const createData = asyncHandler(async(req,res) => {
  const handshake = new Handshake({
      deviceid: req.body.deviceid,
      mobilenumber: req.body.mobilenumber,
      fcmtoken: req.body.fcmtoken,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      runningversion: req.body.runningversion,
      force: req.body.force,
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

module.exports = {
   createData,
}