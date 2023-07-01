import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterContact: (_, action: PayloadAction<string>) => action.payload,
  },
});

export const { filterContact } = filterSlice.actions;
export default filterSlice.reducer;
