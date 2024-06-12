import Book from '../models/book.model';

export const newBookCreate = async (body) => {
  const data = await Book.create(body);
  return data;
};

export const getAllBooks = async (_id) => {
  const data = await Book.find();
  return data;
};

export const getBookById = async (_id) => {
  const data = await Book.findOne({ _id });
  return data;
};

export const updateBook = async (_id, body) => {
  const data = await Book.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

export const deleteBook = async (id) => {
  await Book.findByIdAndDelete(id);
  return '';
};
