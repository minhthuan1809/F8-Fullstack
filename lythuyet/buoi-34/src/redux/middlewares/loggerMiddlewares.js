/* eslint-disable no-unused-vars */
export const loggerMiddlewares = (store) => {
  return (next) => {
    return (action) => {
      //   console.log(store, action);
      next(action);
    };
  };
};
