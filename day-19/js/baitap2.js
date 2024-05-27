var electric = 500;
var _price = 0;

if (electric <= 50) {
  _price = electric * 1.678;
  document.write(
    "Giá điện của :",
    electric,
    "kWh bạn phải trả là : ",
    _price,
    "VND"
  );
} else if (electric > 50 && electric <= 100) {
  _price = electric * 1.734;

  document.write(
    "Giá điện của :",
    electric,
    "kWh bạn phải trả là : ",
    _price,
    "VND"
  );
} else if (electric > 101 && electric < 200) {
  _price = electric * 2.014;

  document.write(
    "Giá điện của :",
    electric,
    "kWh bạn phải trả là : ",
    _price,
    "VND"
  );
} else if (electric > 201 && electric < 300) {
  _price = electric * 2.536;

  document.write(
    "Giá điện của :",
    electric,
    "kWh bạn phải trả là : ",
    _price,
    "VND"
  );
} else if (electric > 301 && electric < 400) {
  _price = electric * 2.834;

  document.write(
    "Giá điện của :",
    electric,
    "kWh bạn phải trả là : ",
    _price,
    "VND"
  );
} else if (electric > 401) {
  _price = electric * 2.927;

  document.write(
    "Giá điện của :",
    electric,
    "kWh bạn phải trả là : ",
    _price,
    "VND"
  );
}
