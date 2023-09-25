const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormatter")

const manifestationSchema = new Schema(
    {
        todaysFeeling: {
            type: String,
            required: true,
        },
        whatToManifest: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        manifestationAction: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        manifestationObstacles: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        todayImGratefulFor: {
            type: String,
            required: true,
        },
        details: {
            type: String,
            required: false,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
        },
    },
    {
        toJSON: {
          getters: true,
        },
        id: false,
        versionKey: false,
        timestamps: true
        }
);

const Manifestation = model("Manifestation", manifestationSchema);

module.exports = Manifestation;