const dataLoca = JSON.parse(localStorage.getItem("data"));
let data;
if (dataLoca) {
  data = dataLoca;
} else {
  data = {
    SliderTrack: 5,
    darkMode: true,
    payload: [],
  };
}

export default function handleData(numberTrack, darkMode, _data) {
  // Cập nhật dữ liệu
  data.SliderTrack = numberTrack;
  data.darkMode = darkMode;

  // Nếu có dữ liệu mới được cung cấp, thêm vào payload
  if (_data && typeof _data === "object") {
    data.payload.push(_data);
  }

  // Lưu dữ liệu vào localStorage sau khi cập nhật
  localStorage.setItem("data", JSON.stringify(data));

  return data;
}
