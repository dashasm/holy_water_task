import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  events: [],
  selectedEvent: null,
  newDate: null,
  showList: null,
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    setSelectedEvent: (state, action) => {
      state.selectedEvent = action.payload;
    },
    setNewDate: (state, action) => {
      state.newDate = action.payload;
    },
    setShowList: (state, action) => {
      state.showList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setEvents, setSelectedEvent, setNewDate, setShowList } =
  eventsSlice.actions;

export default eventsSlice.reducer;
