import { toast } from "react-toastify";
const dataLoca = JSON.parse(localStorage.getItem("cart"));
const initialState = JSON.parse(localStorage.getItem("cart")) || {
  ProductInCart: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    // thêm dữ liệu
    case "cart/add":
      const productIndex = state.ProductInCart.findIndex(
        (product) => product.id === action.payload._id
      );

      let updatedState;

      if (productIndex !== -1) {
        const updatedProduct = {
          ...state.ProductInCart[productIndex],
          quantity: state.ProductInCart[productIndex].quantity + 1,
        };

        updatedState = {
          ...state,
          ProductInCart: [
            ...state.ProductInCart.slice(0, productIndex),
            updatedProduct,
            ...state.ProductInCart.slice(productIndex + 1),
          ],
        };
      } else {
        updatedState = {
          ...state,
          ProductInCart: [
            ...state.ProductInCart,
            {
              id: action.payload._id,
              brand: action.payload.brand,
              category: action.payload.category,
              image: action.payload.image,
              name: action.payload.name,
              price: action.payload.price,
              remaining: action.payload.quantity,
              quantity: 1,
              location: action.payload.location,
            },
          ],
        };
      }

      localStorage.setItem("cart", JSON.stringify(updatedState));
      toast.dismiss();
      toast.success("đã thêm sảm phẩm thành công !");
      return updatedState;
    // xóa dữ liệu
    case "cart/delete":
      const newState = {
        ...state,
        ProductInCart: state.ProductInCart.filter(
          (product) => product.id !== action.payload._id // Đảm bảo trường này khớp
        ),
      };

      console.log("New Cart State:", newState); // Log trạng thái mới
      localStorage.setItem("cart", JSON.stringify(newState));
      toast.dismiss();
      toast.info("đã xóa sảm phẩm thành công !");
      return newState;

    // thanh toán
    case "cart/pay": {
      toast.success("thanh toán thành công !");
      localStorage.removeItem("cart");
      return {
        ...state,
        ProductInCart: [],
      };
    }
    default:
      return state;
  }
};
