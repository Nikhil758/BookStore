import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    fullname: {
      type: String
    },
    contact:{
      type: Number
    },
    email:{
      type: String,
      unique: true
    },
    password:{
      type: String
    },
    verified:{
      type: Boolean,
      default: false
    },
    role:{
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);