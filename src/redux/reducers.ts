import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Book {
  id: number;
  name: string;
  price: number;
  category: string;
  description?: string;
}

interface BooksState {
  books: Book[];
  selectedBook: Book | null;
}

const initialState: BooksState = {
  books: [
    {
      id: 1,
      name: "Book 1",
      price: 10,
      category: "Fiction",
      description: "Description of Book 1",
    },
    {
      id: 2,
      name: "Book 2",
      price: 15,
      category: "Non-fiction",
      description: "Description of Book 2",
    },
  ],
  selectedBook: null,
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push({ ...action.payload, id: Date.now() });
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const index = state.books.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
    deleteBook: (state, action: PayloadAction<number>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
      state.selectedBook = null;
    },
    selectBook: (state, action: PayloadAction<Book>) => {
      state.selectedBook = action.payload;
    },
  },
});

export const { addBook, updateBook, deleteBook, selectBook } =
  booksSlice.actions;

export default booksSlice.reducer;
