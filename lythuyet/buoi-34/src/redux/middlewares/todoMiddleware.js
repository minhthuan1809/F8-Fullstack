export const getTodos = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      if (!response.ok) {
        throw new Error("err");
      }
      const data = await response.json();
      // console.log(data);

      dispatch({
        type: "todo/update",
        payload: data,
      });
      dispatch({
        type: "todo/todoUpdate",
        payload: "success",
      });
    } catch (error) {
      dispatch({
        type: "todo/todoUpdate",
        payload: "error",
      });
      console.log(error);
    }
  };
};
