Object.prototype.getCurrency = function (currency) {
  return this.toLocaleString() + " " + currency;
};

// Case 1: Sử dụng giá trị số
var price = 12000;
console.log(price.getCurrency("đ")); // Hiển thị: 12,000 đ

// Case 2: Sử dụng giá trị chuỗi có thể chuyển đổi thành số
var priceString = "12000000";
console.log(Number(priceString).getCurrency("đ")); // Hiển thị: 12,000,000 đ
