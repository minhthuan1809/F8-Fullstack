export const middleware = (stort) => {
  return (action) => {
    // console.log("action", action);
    // console.log("stort", stort);
    if (typeof action === "function") {
      return action(stort.dispatch, stort.getState);
    }
    stort.dispatch(action);
  };
};
// bất kì dispatch nào cũng chạy qua hàm này
