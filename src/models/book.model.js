import { Schema, model } from 'mongoose';

const bookSchema = new Schema(
    {
      bookName: {
        type: String,
        unique: true
      },
      bookImage: {
        type: String
      },
      author: {
        type: String
      },
      description: {
        type: String
      },
      quantity: {
        type: String,
        default: 0
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