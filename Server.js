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

app.use("/api/v1/handshake",handshakeRoutes);
app.use("/api/v1/order",OrderRoutes);

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`app is runnig on ${port}`);
    
})