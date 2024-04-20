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
      name: "City in Ruins: A Novel Series",
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
      name: "A Fate Inked in Blood: Book One of the Saga",
      price: 27.99,
      category: "Fantasy",
      description:
        "A steamy romantasy steeped in Norse folklore, A Fate Inked in Blood stars a fierce heroine stuck in an arranged marriage, destined for more. With a fully-realized world packed with dynamic and complex heroes, this is a fantasy realm you will love your stay in.",
    },
    {
      id: 4,
      name: "Remarkably Bright Creatures",
      price: 39.99,
      category: "Animal",
      description:
        "Sometimes a short synopsis is all you need: A detective octopus helps a grieving aquarium employee solve the mystery of her missing son. It’s certainly unique in vessel, but the themes of coping, recovering, and moving forward resonate whether you have two arms or eight.",
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
  },
});

export const { addBook, updateBook, deleteBook } = booksSlice.actions;

export default booksSlice.reducer;
