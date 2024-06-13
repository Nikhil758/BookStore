import { Schema, model } from 'mongoose';

const orderSchema = new Schema({
    orderBy: {
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
      orderTotal: {
        type: Number,
        default: 0
      }
    }
  );
  
  export default model('Order', orderSchema);