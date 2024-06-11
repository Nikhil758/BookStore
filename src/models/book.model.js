import { Schema, model } from 'mongoose';

const bookSchema = new Schema(
    {
      bookName: {
        type: String,
        unique: true
      },
      author: {
        type: String
      },
      description: {
        type: String
      },
      quantity: {
        type: String
      },
      price: {
        type: String
      },
      discountPrice: {
        type: String
      }
    }
  );
  
  export default model('Book', bookSchema);