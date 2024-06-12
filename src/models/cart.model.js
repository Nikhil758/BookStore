import { Schema, model } from 'mongoose';

const cartSchema = new Schema({
    cartOwner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    books: [{
        book_id: {
            type: Schema.Types.ObjectId,
            ref: 'Book'
          },
        quantity: {
            type: Number,
            default: 1
        },
        _id: false
      }],
      cartTotal: {
        type: Number,
        default: 0
      }
    }
  );
  
  export default model('Cart', cartSchema);