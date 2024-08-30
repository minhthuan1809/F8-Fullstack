// const pattern = /^(0|\+84)[0-9]{9}/;
// const phone = "0325397277";

// phủ định kiểm tra trong chuỗi có ký tự đặc biệt không ?
// const str = "A$";
// const pattern = /[a-zA-Z0-9-_]/;
// console.log(pattern.test(pattern));

// kt trong chuỗi có dấu chấm hay không ?

// const str = "Minhthuan.com";
// const pattern = /\./;
// console.log(pattern.test(pattern));

// kiểm tra dia chỉ gmail hợp kệ
// const email = "minhthuan@fullstack.web";

// const pattern = /[a-zA-Z0-9_]+[^a-zA-Z0-9-_] /;
// console.log(pattern.test(pattern));
// // cắt chuỗi
// const str = ` hello minh thuận 0325397277 `;
// const pattern = /(0|\+84)\d{9}/g;
// const result = str.match(pattern);
// console.log(result);

// capturing group
// const str = `minhthuan@gmail.com`;
// const pattern =
//   /(^[a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9])@(?:(?:[a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z])\.)+[a-zA-Z]{2,}$/;
// const result = str.match(pattern);
// console.log(result);

// thay thế
let content = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. minhthuan.web@gmail.com Voluptate, quos nam minus neque iusto pariatur quia rem
    assumenda asperiores totam voluptas commodi ad sequi exercitationem adipisci dolores eius et ipsa! minhthuan.web@gmail.com`;

const pattern =
  /([a-zA-Z][a-zA-Z0-9-_.]+[a-zA-Z0-9]@((([a-zA-Z][a-zA-Z0-9-_]*[a-zA-Z0-9]|[a-zA-Z])\.)+[a-zA-Z]{2,}))/g;
content = content.replace(
  pattern,
  `<a href="mailto:$1" title = "domain $2">$1</a>`
);
document.body.innerHTML = content;

/*
$1 ==> group 1
$2 ==> group 2
*/
