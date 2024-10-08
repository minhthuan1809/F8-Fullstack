import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(getTodo.fulfilled, (state, action) => {
      state.todoList = action.payload;
    });
  },
});

export const getTodo = createAsyncThunk("getTodo", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await response.json();
});
// export const { increment, decrement } = counterSlice.actions;

//state :
// - pending
// - fullding
// - rejeected
