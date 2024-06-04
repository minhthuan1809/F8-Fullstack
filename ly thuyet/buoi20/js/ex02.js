console.log(Array.prototype);
var users = ["user1", "user2", "user3", "user4"];
console.log(users);

//1. at(index) ==> trả vẩ phần tử theo index

// console.log(users.at(2));

// 2. concat() == > nối nhiều mảng thành nhiều mảng

// var arr1 = ["A", "B", "C"];
// var arr2 = [1, 2, 3];
// var arr3 = [8, 9, 0, ["f8"]];
// var arr = arr1.concat(arr2, [5, 6, 7, 8], arr3);
// console.log(arr);
// 3. fill() ==> cập nhật tất cả phần tử mảng thành 1 giá trị
console.log(users.fill(10));
