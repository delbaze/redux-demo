import { createSlice } from "@reduxjs/toolkit";

const initialState = "light";
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      return state === "light" ? "dark" : "light";
    },
    set: (state, action) => {
      return action.payload;
    },
  },
});

const { actions, reducer } = themeSlice;
// on récupère les actions et le réducteur depuis le slice
export const { set, toggleTheme } = actions;
// on exporte ensuite le réducteur par défaut pour ce fichier

export const actualTheme = (state) => state;
export default reducer;
