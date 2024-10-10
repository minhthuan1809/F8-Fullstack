export const getProducts = (pageNumber) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "products/loading",
        loading: true,
      });
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}?limit=20&page=${pageNumber}`
      );
      const data = await response.json();

      if (!data.status_code === 200) {
        throw new Error("lỗi api");
      }
      dispatch({
        type: "products/render",
        payload: data.data.listProduct,
        totalPage: data.data.totalPage,
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch({
        type: "products/loading",
        loading: false,
      });
    }
  };
};
