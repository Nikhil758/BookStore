import { Schema, model } from 'mongoose';

const tokenSchema = new Schema(
    {
      email: {
        type: String
      },
      verificationToken:{
        type: String
      }
    }
  );
  
  export default model('Token', tokenSchema);