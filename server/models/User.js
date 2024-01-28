import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone_no:{
      type:String,
      required:true,
    },
    address:{
      type:String,
      maxlength: 1000,
      required: true,
    },
    area:{
        type:String,
        required:true,
    }
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
