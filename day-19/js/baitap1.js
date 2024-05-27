var customer = 130;
var price = 0;
if (customer <= 1) {
  price = customer * 15000;
  document.write("Giá của :", customer, "km đi taxi của bạn là : ", price);
} else if (customer > 1 && customer <= 5) {
  price = (customer - 1) * 13500;
  price += 1 * 15000;
  document.write("Giá của :", customer, "km đi taxi của bạn là : ", price);
} else if (customer > 5) {
  price = (customer - 5) * 11000;
  price += 1 * 15000; // giá taxi dưới 1km
  price += 4 * 13500; // Giá taxki dưới 5km
  document.write("Giá của :", customer, "km đi taxi của bạn là : ", price);
} else if (customer > 120) {
  price = (customer - 5) * 11000 * (10 / 100);
  price += 1 * 15000; // giá taxi dưới 1km
  price += 4 * 13500; // Giá taxki dưới 5km
  document.write("Giá của :", customer, "km đi taxi của bạn là : ", price);
}
