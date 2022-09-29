import { ColorScheme } from "@mantine/core";
import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface ThemeState {
  colorScheme: ColorScheme;
}

// Define the initial state using that type
const colorStorage: any = localStorage.getItem("colorScheme");
const initialState: ThemeState = {
  colorScheme: colorStorage || "light",
};

export const themeSlice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toogleTheme: (state) => {
      let color: ColorScheme = state.colorScheme === "light" ? "dark" : "light";

      localStorage.setItem("colorScheme", color);
      state.colorScheme = color;
    },
  },
});

export const { toogleTheme } = themeSlice.actions;

export default themeSlice.reducer;
