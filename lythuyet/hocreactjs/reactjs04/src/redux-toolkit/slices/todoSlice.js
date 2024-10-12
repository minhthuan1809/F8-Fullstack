import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  status: "idle",
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      state.todoList = action.payload;
      state.status = "idle";
    });
    // builder.addCase(getTodos.fulfilled, (state) => {
    //   state.status = "pending";
    // });
  },
});

export const getTodos = createAsyncThunk(
  "getTodos",
  async (_, { rejectWithValue }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    if (!response.ok) {
      return rejectWithValue("Error");
    }
    return response.json();
  }
);
//State:
// - pending
// - fulfilled
// - rejected
