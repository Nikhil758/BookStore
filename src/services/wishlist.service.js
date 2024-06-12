import Wishlist from '../models/wishlist.model';
import Book from '../models/book.model';

export const getWishlist = async (wishlistOwner) => {
  const data = await Wishlist.findOne({ wishlistOwner });
  return data;
};

export const toggleWish = async (wishlistOwner, book_id) => {
  let wishlist = await Wishlist.findOne({ wishlistOwner });

  if (!wishlist) {
    wishlist = new Wishlist({ wishlistOwner, books: [] });
  }

  const bookDetails = await Book.findById(book_id);
  if (!bookDetails) {
    throw new Error("Book not found");
  }

  let bookIndex = -1;

  for (let i = 0; i < wishlist.books.length; i++) {
    if (String(wishlist.books[i].book_id) === book_id) {
      bookIndex = i;
      break;
    }
  }

  if (bookIndex === -1) {
    wishlist.books.push({ book_id });
  }
  else{
    wishlist.books.splice(bookIndex, 1);
  }

  await wishlist.save();
  return wishlist;
};