import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CalendarState {
  value: Date;
}

// Define the initial state using that type
const initialState: CalendarState = {
  value: new Date(),
};

export const calendarSlice = createSlice({
  name: "calendar",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    handleCalendar: (state, action: PayloadAction<Date>) => {
      state.value = action.payload;
    },
  },
});

export const { handleCalendar } = calendarSlice.actions;

export default calendarSlice.reducer;
