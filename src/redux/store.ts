import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice } from "./calendar/calendarSlicer";
import { themeSlice } from "./theme/themeSlicer";
// ...

export const store = configureStore({
  reducer: {
    [themeSlice.name]: themeSlice.reducer,
    [calendarSlice.name]: calendarSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
