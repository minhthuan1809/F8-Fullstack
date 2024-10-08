# Redux

- Thư viện quản lý Global state trong các ứng dụng javascript
- redux không phải reacjs

## Các thành phần của Redux

- Store : kho lưu trữ State
- Reducer : hàm để quản lý việc cập nhật state
- Action : oject mô tả hàng dộng cập nhật state
- Dispatch : Hàm gửi action lên reducer
- subscribe : Lắng nghe sự thay đổi của Stace trên store

## Làm sao để tích hợp redux vào react

- Sử dụng thư viện react-redux

* Có sẵn component provider

- có sẵn các cái hook cần thiết

* useDispathch
* useSelector

- Tự động re-render khi state trên store thay đổi

## Lội trình học redux

- Redux core + kết hợp với react
- redux toolkit + kết hợp với react
- redux Middleware : Thunk, Saga

## redux toolkit

Gom các thành phần của 1 module vào 1 slice

- reducer
- state
- action
- action creator
  Tích hợp sẵn redux-thunk
  Tích hợp sẵn redux devtool
