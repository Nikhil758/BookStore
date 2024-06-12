import { Schema, model } from 'mongoose';

const wishlistSchema = new Schema({
    wishlistOwner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    books: [{
        book_id: {
            type: Schema.Types.ObjectId,
            ref: 'Book'
          },
        _id: false
      }]
    }
  );
  
  export default model('Wishlist', wishlistSchema);