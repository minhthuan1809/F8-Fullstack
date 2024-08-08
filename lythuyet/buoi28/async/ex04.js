// Async Function
//Await operator
//Await func1()
//Await func2()
//Await func3()
// => Nằm trong hàm async
// hàm async luôn tra về 1 promise

//

const getA = () =>
  new Promise((resolve, reject) => setTimeout(() => resolve("get a "), 1000));
const getB = () =>
  new Promise((resolve) => setTimeout(() => resolve("GET B"), 2000));
const getC = () =>
  new Promise((resolve) => setTimeout(() => resolve("GET C"), 3000));

// const showResult = async () => {
//   try {
//     const a = await getA();
//     if (!a) {
//       throw new Error("không có kết quả ");
//     }
//     const b = await getB();
//     console.log(b);
//     const c = await getC();
//     console.log(c);
//   } catch (e) {
//     console.log(e);
//   }
// };
// showResult();

const getResult = async () => {
  return await getA();
};
