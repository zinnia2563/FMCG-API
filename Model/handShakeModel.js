const mongoose = require("mongoose");

const handshakeSchema = new mongoose.Schema(
    {
        deviceid: {
            type: String
        },
        mobilenumber: {
            type: String,
            unique: true,
        },
        fcmtoken: {
            type: String
        },
        latitude: {
          type: String,
        },
        longitude: {
          type: String,
        },
        runningversion: {
          type: String,
        },
        force: {
          type: Boolean,
        }
    },

    {
        timestamps: true,
    }
);
const HandShakeData = mongoose.model("HandShakeData", handshakeSchema);
module.exports = HandShakeData;