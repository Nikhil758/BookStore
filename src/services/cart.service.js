import Cart from '../models/cart.model';
import Book from '../models/book.model';

export const getCart = async (owner_id) => {
  const data = await Cart.findOne({ cartOwner: owner_id });
  return data;
};

export const addBook = async (owner_id, book_id) => {
  let cart = await Cart.findOne({ cartOwner: owner_id });

  if (!cart) {
    cart = new Cart({ cartOwner: owner_id, books: [], cartTotal: 0 });
  }

  const bookDetails = await Book.findById(book_id); // Assuming Book is your book model
  if (!bookDetails) {
    throw new Error("Book not found");
  }
  const bookPrice = parseInt(bookDetails.price, 10);

  let bookExists = false;
  for (let book of cart.books) {
    if (String(book.book_id) === book_id) {
      book.quantity += 1;
      cart.cartTotal = (parseInt(cart.cartTotal, 10) + bookPrice).toString();
      bookExists = true;
    }
  }
  if (!bookExists) {
    cart.books.push({ book_id, quantity: 1 });
    cart.cartTotal = (parseInt(cart.cartTotal, 10) + bookPrice).toString();
  }
  await cart.save();
  return cart;
};

export const removeBook = async (owner_id, book_id) => {
  let cart = await Cart.findOne({ cartOwner: owner_id });

  if (!cart) {
    throw new Error("Cart not found");
  }

  // Retrieve the price of the book
  const bookDetails = await Book.findById(book_id); // Assuming Book is your book model
  if (!bookDetails) {
    throw new Error("Book not found");
  }
  const bookPrice = parseInt(bookDetails.price, 10);

  let bookIndex = -1;

  // Find the index of the book in the cart
  for (let i = 0; i < cart.books.length; i++) {
    if (String(cart.books[i].book_id) === book_id) {
      bookIndex = i;
      break;
    }
  }

  if (bookIndex === -1) {
    throw new Error("Book not found in cart");
  }

  let book = cart.books[bookIndex];
  book.quantity -= 1;
  cart.cartTotal = (parseInt(cart.cartTotal, 10) - bookPrice).toString();

  // Remove the book from the cart if the quantity is zero
  if (book.quantity <= 0) {
    cart.books.splice(bookIndex, 1);
  }

  await cart.save();

  return cart;
};  