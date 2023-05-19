import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers } from "./apiCalls";

const initialState = { users: [] };
const apiSlice = createSlice({
  name: "demoApi",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
      //voir la doc pour les valeurs retournées : https://redux-toolkit.js.org/api/createAsyncThunk#return-value
      state.users = action.payload.users;
    });
  },
});

export const fetchUsersAsync = createAsyncThunk(
  "demoApi/fetchUsersAsync",
  async (state, action) => {
    const users = await fetchUsers();
    return { ...state, users };
  }
);

const { actions, reducer } = apiSlice;
export const {} = actions;
export const users = (state) => state.api.users;

export default reducer;
