import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  status: "idle",
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(getTodo.fulfilled, (state, action) => {
      state.todoList = action.payload;
      state.status = "idle";
    });
  },
});

export const getTodo = createAsyncThunk("getTodo", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
});

// export const { increment, decrement } = counterSlice.actions;

//state :
// - pending
// - fullding
// - rejeected
