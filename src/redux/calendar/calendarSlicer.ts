import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface IDaysNotification {
  [x: number]: {
    [x: number]: number[];
  };
}
interface CalendarState {
  value: Date;
  daysNotification: IDaysNotification | any;
}

// Define the initial state using that type
const initialState: CalendarState = {
  value: new Date(),
  daysNotification: null,
};

interface IDaysParams {
  year: number;
  month: number;
  days: number[];
}

export const calendarSlice = createSlice({
  name: "calendar",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    handleCalendar: (state, action: PayloadAction<Date>) => {
      state.value = action.payload;
    },
    handleDaysNotification: (state, action: PayloadAction<IDaysParams>) => {
      const params = action.payload;
      state.daysNotification = {
        ...state.daysNotification,
        [params.year]: {
          ...state.daysNotification?.[params.year],
          [params.month]: params.days,
        },
      };
    },
    handleAddDayNotificatiion: (state, action: PayloadAction<IDaysParams>) => {
      const params = action.payload;
      state.daysNotification = {
        ...state.daysNotification,
        [params.year]: {
          ...state.daysNotification?.[params.year],
          [params.month]: [
            ...state.daysNotification?.[params.year]?.[params.month],
            ...params.days,
          ],
        },
      };
    },
  },
});

export const {
  handleCalendar,
  handleDaysNotification,
  handleAddDayNotificatiion,
} = calendarSlice.actions;

export default calendarSlice.reducer;
