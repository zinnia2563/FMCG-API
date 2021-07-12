const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./Config/Db");
const handshakeRoutes = require("./Router/HandshakeRouter")

dotenv.config();
connectDB()
app.use(express.json());
app.use(cors());

app.get("/",(req,res) =>{
    res.send("ok");
})

app.use("/api/v1/handshake",handshakeRoutes);

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`app is runnig on ${port}`);
    
})