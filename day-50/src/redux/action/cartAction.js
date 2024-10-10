export const addCart = (value) => ({ type: "cart/add", payload: value });
export const deleteCart = (value) => ({
  type: "cart/delete",
  payload: { _id: value.id },
});
export const PayCart = () => ({
  type: "cart/pay",
});
