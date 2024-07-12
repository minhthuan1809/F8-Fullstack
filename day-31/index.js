document.addEventListener("DOMContentLoaded", function () {
  var addButtons = document.querySelectorAll(".add button");
  var cartTable = document.querySelector("body > table[hidden]");
  var cartEmptyMessage = document.querySelector(".at_hidden");

  addButtons.forEach((button) => {
    button.addEventListener("click", function () {
      var row = button.closest("tr");
      var productName = row.querySelector(".name").innerText;
      var productPrice = parseInt(
        row.querySelector("td:nth-child(3)").innerText
      );
      var productQuantity = parseInt(row.querySelector(".quantity").value);

      addToCart(productName, productPrice, productQuantity);
    });
  });

  function addToCart(name, price, quantity) {
    // Hiển thị bảng giỏ hàng nếu nó đang ẩn
    if (cartTable.hidden) {
      cartTable.hidden = false;
      cartEmptyMessage.hidden = true;
    }

    // Kiểm tra nếu sản phẩm đã tồn tại trong giỏ hàng
    var existingRow = Array.from(cartTable.querySelectorAll("tbody tr")).find(
      (row) =>
        row.querySelector(".name") &&
        row.querySelector(".name").innerText === name
    );

    if (existingRow) {
      var quantityInput = existingRow.querySelector(".quantity");
      quantityInput.value = parseInt(quantityInput.value) + quantity;
      updatePrice({ target: quantityInput });
    } else {
      var newRow = document.createElement("tr");

      var sttCell = document.createElement("td");
      sttCell.classList.add("STT");

      var nameCell = document.createElement("td");
      nameCell.classList.add("name");
      nameCell.innerText = name;

      var priceCell = document.createElement("td");
      priceCell.innerText = price;

      var quantityCell = document.createElement("td");
      var quantityInput = document.createElement("input");
      quantityInput.classList.add("quantity");
      quantityInput.type = "number";
      quantityInput.value = quantity;
      quantityInput.addEventListener("input", updatePrice);
      quantityCell.appendChild(quantityInput);

      var totalCell = document.createElement("td");
      totalCell.classList.add("price");
      totalCell.innerText = price * quantity;

      var deleteCell = document.createElement("td");
      var deleteButton = document.createElement("button");
      deleteButton.innerText = "Xóa";
      deleteButton.addEventListener("click", function () {
        newRow.remove();
        updateSTT();
        updateTotal();
        if (cartTable.querySelectorAll("tbody tr").length === 2) {
          // Chỉ còn hàng tiêu đề và hàng tổng
          cartTable.hidden = true;
          cartEmptyMessage.hidden = false;
        }
      });
      deleteCell.appendChild(deleteButton);

      newRow.appendChild(sttCell);
      newRow.appendChild(nameCell);
      newRow.appendChild(priceCell);
      newRow.appendChild(quantityCell);
      newRow.appendChild(totalCell);
      newRow.appendChild(deleteCell);

      cartTable
        .querySelector("tbody")
        .insertBefore(newRow, cartTable.querySelector("tbody tr:last-child"));
    }

    updateSTT();
    updateTotal();
  }

  function updateSTT() {
    var rows = cartTable.querySelectorAll("tbody tr:not(:last-child)");
    rows.forEach((row, index) => {
      row.querySelector(".STT").innerText = index + 1;
    });
  }

  function updatePrice(event) {
    var quantityInput = event.target;
    var row = quantityInput.closest("tr");
    var priceCell = row.querySelector("td:nth-child(3)");
    var totalCell = row.querySelector(".price");

    var price = parseInt(priceCell.innerText);
    var quantity = parseInt(quantityInput.value);
    totalCell.innerText = price * quantity;

    updateTotal();
  }

  function updateTotal() {
    var rows = cartTable.querySelectorAll("tbody tr:not(:last-child)");
    let totalQuantity = 0;
    let totalPrice = 0;

    rows.forEach((row) => {
      var quantityInput = row.querySelector(".quantity");
      var totalCell = row.querySelector(".price");

      totalQuantity += parseInt(quantityInput.value);
      totalPrice += parseInt(totalCell.innerText);
    });

    var totalRow = cartTable.querySelector(".total-row");
    totalRow.querySelector(".total-sl").innerText = totalQuantity;
    totalRow.querySelector(".total-price").innerText = totalPrice;

    // Kiểm tra nếu không có sản phẩm trong giỏ hàng
    if (totalQuantity === 0) {
      cartTable.hidden = true;
      cartEmptyMessage.hidden = false;
    } else {
      cartTable.hidden = false;
      cartEmptyMessage.hidden = true;
    }
  }
  function clearCart() {
    // Xóa hết các sản phẩm trong giỏ hàng
    var rows = cartTable.querySelectorAll("tbody tr:not(.total-row)");
    rows.forEach((row) => {
      row.remove();
    });

    // Sau khi xóa hết, cập nhật lại số lượng và tổng tiền
    updateSTT();
    updateTotal();

    // Kiểm tra nếu không còn sản phẩm trong giỏ hàng, ẩn bảng giỏ hàng và hiển thị thông báo
    if (cartTable.querySelectorAll("tbody tr").length === 1) {
      cartTable.hidden = true;
      cartEmptyMessage.hidden = false;
    }
  }
});
