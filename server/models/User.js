const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

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

userSchema.pre("save", async function (next) {
    if (this.isNew || this.isModified("password")) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
  });
  
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

const User = model("User", userSchema);

module.exports = User;