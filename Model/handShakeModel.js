const mongoose = require("mongoose");

const handshakeSchema = new mongoose.Schema(
    {
        deviceid: {
            type: String
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
          default: "V1",
        },
        force: {
          type: Boolean,
          default: false,
        }
    },

    {
        timestamps: true,
    }
);
const HandShakeData = mongoose.model("HandShakeData", handshakeSchema);
module.exports = HandShakeData;