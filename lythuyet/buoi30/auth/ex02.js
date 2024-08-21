// xử lý nhiều request bị failed cùng lúc
let token = `My Token`;
let isExpire = false;
let refeshTokenPromise = null;
const refetchToken = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`new token : ${Math.random()}`);
    }, Math.random() * 1000);
  });
};
const callApi = (url) => {
  setTimeout(async () => {
    if (url === "/courses") {
      isExpire = true;
    }
    if (isExpire) {
      // hết hạn == > gọi refesh token
      if (!refeshTokenPromise) {
        refeshTokenPromise = refetchToken();
      }
      console.log(refeshTokenPromise);

      const newToken = await refeshTokenPromise;
      token = newToken;
      isExpire = false;
    }
    console.log(`request url : ${url}`, `Token:${token}`);
  }, 1000);
};
callApi("/profile");
callApi("/courses");
callApi("/products");
callApi("/posts");
