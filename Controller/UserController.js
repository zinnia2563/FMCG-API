const asyncHandler = require("express-async-handler");
const User = require("../Model/UserModel");

//Login user
const authUser = asyncHandler(async (req, res) => {
  const { mobile, password } = req.body;


  const user = await User.findOne({ mobile });
  if (user && (await user.matchPassword(password))) {
    res.json({
      userId: user._id,
      mobile: user.mobile,
    });
  } else {
    res.status(401).json({
        message: "Invalid mobile or password",
    });
    throw new Error();
  }
});

//for registration
const createUser = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { mobile } = req.body;

  const userExists = await User.findOne({ mobile });

  if (userExists) {
    res.status(400).json({message: "User already exists"});
  }

  const user = new User({
    mobile: req.body.mobile,
    password: req.body.password, 
  });

  try {
    const createUser = await user.save();
    res.json(createUser);
  } catch (error) {
   
  }
});


module.exports = {
  createUser,
  authUser, 
};