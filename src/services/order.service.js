import Cart from '../models/cart.model';
import Order from '../models/order.model';
import Book from '../models/book.model';


export const placeOrder = async (orderBy) => {
  let cart = await Cart.findOne({ cartOwner: orderBy })

  if(!cart || cart.books.length === 0){
    throw new Error("Add items into cart first")
  }
  let order = new Order({ orderBy, books: cart.books, orderTotal: cart.cartTotal  });
  for(let book of order.books){
    let b = await Book.findOne({ _id:book.book_id})
    b.quantity -= book.quantity;
    await b.save();
  }

  cart.books = [];
  cart.cartTotal = '0';
  await cart.save();
  await order.save();
  return order;
};