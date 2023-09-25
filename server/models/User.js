const { Schema, model } = require("mongoose");


const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true, 
        },
        password: {
            type: String,
            required: true,
            minlength: 5,
        },
        birthday: {
            type: Date,
            required: true,
        },
        manifestations: [
            {
                type: Schema.Types.ObjectId,
                ref: "Manifestation",
            },
        ], 
    },
    {
        toJSON: {
            virtuals: true,
        },
            id: false,
            versionKey: false,
      }
);

const User = model("User", userSchema);

module.exports = User;