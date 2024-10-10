export function getDetails(id) {
  return async (dispatch) => {
    try {
      dispatch({
        type: "details/loading",
        loading: true,
      });
      const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
      const data = await response.json();
      if (data.code !== 200) {
        throw new Error("Lỗi api chi tiết sản phẩm");
      }
      dispatch({
        type: "details/product",
        payload: data.data,
      });
    } catch (err) {
      console.log("Lỗi api chi tiết sản phẩm", err);
    } finally {
      dispatch({
        type: "details/loading",
        loading: false,
      });
    }
  };
}
