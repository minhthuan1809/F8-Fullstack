/*
APi (application programing interface )
khi làm việc web API == > học http
client (Front-end) ==> API ==> Sever (back-end)
- để giao tiếp giữa client với sever ==> có 2 cách
+ XHR
+ Fetch

Chuẩn bị server
- Tìm các dịch dụ Fake
- Cài Thư Viện ==> Tự fake trên máy loca

HTTP REQUEST
- url
- mmethod
- header
- body
HTTP RESPONSE
- BODY
- STATUS (CODE,TEXT)
- HEADER
*/
const url = "http://localhost:3000/users";
const usersPromise = fetch(url, {
  method: "GET",
  header: {
    "x-api-key": "ahihi",
  },
});
usersPromise
  .then((response) => {
    return response.json();
  })
  .then((user) => {
    console.log(user);
  });
