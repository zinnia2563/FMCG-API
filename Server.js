const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./Config/Db");
const handshakeRoutes = require("./Router/HandshakeRouter")
const OrderRoutes = require("./Router/OrderRouter");

dotenv.config();
connectDB()
app.use(express.json());
app.use(cors());

app.get("/",(req,res) =>{
    res.send("ok");
})

app.use("/api/v1/handshake",handshakeRoutes); // it will use for device info in handshake routes
app.use("/api/v1/order",OrderRoutes);// it will use for order_by_image routes

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`app is runnig on ${port}`);
    
})