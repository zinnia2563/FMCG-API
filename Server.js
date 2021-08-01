const express = require('express');
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./Config/Db");
const handshakeRoutes = require("./Router/HandshakeRouter")
const OrderRoutes = require("./Router/OrderRouter");
const UserRoutes = require("./Router/UserRoutes")
const CashboxRoutes = require("./Router/CashboxRouter")
const DuePayandReceiveRoutes = require("./Router/DuePayandReceiveRouter")
const ExpenseRoutes= require("./Router/ExpenseRouter")
const NewTransactionRoutes = require("./Router/NewTransactionRouter")

dotenv.config();
connectDB()
app.use(express.json());
app.use(cors());

app.get("/",(req,res) =>{
    res.send("ok");
})

app.use("/api/v1/handshake",handshakeRoutes); // it will use for device info in handshake route
app.use("/api/v1/order",OrderRoutes);// it will use for order_by_image routes
app.use("/api/v1/users",UserRoutes);
app.use("/api/v1/cashbox",CashboxRoutes)
app.use("/api/v1/duepayandreceive",DuePayandReceiveRoutes);
app.use("/api/v1/expense",ExpenseRoutes);
app.use("/api/v1/newtransaction",NewTransactionRoutes);

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`app is runnig on ${port}`);
    
})