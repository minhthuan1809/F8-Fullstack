export const initialState = {
  count: 0,
  todoList: [],
  postList: [],
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "counter/increment": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "counter/decrement": {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case "todo/add": {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    }
    case "post/update": {
      return {
        ...state,
        postList: action,
      };
    }
    default:
      return state;
  }
};
/*
Vấn đề: 
1. Chỉ Có 1 reducer ==> File reduce bị rối ==> tách reducer
2. state sẽ chứa toàn bộ state của dự án ==> quá trình lấy dữ liệu trong 1 component sẽ khó khăn
Giải pháp tạo 2 hook riêng tương ứng với các chức năng 
- useDispatch() ==> Trả về hàm dispatch trên stort
- useSeletor(callback ) => Trả về state mà bạn muốn lọc
3. action object : đăng truywwfn thủ công => gặp vấn đề khi maintain dự án
Giải Pháp : Tạo 1 hàm trả về Action Object ==> gọi action creator
*/
