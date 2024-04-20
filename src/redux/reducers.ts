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
      name: "City in Ruins: A Novel",
      price: 29.99,
      category: "Fiction",
      description:
        "Violet may have survived her first year at Basgiath War College for dragon riders, but this epic adventure is just heating up. An electrifying follow-up to a brutally addictive fantasy.",
    },
    {
      id: 2,
      name: "The Anxious Generation",
      price: 24.99,
      category: "Non-fiction",
      description:
        "Addressing the ongoing teen mental illness crisis, this is an actionable approach to making a difference. It's practical and insightful, engaging and necessary.",
    },
    {
      id: 3,
      name: "The Last House on Needless Street",
      price: 19.99,
      category: "Thriller",
      description: "A chilling and captivating novel",
    },
    {
      id: 4,
      name: "The Love Hypothesis",
      price: 39.99,
      category: "Romance",
      description:
        "When a fake relationship between scientists meets the irresistible force of attraction, it throws error.",
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
