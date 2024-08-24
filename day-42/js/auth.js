let SERVER_API = "https://api-auth-two.vercel.app";

// const connectApi = async () => {
//   try {
//     const response = await fetch(`${url}/blogs`);
//     if (!response.ok) {
//       throw new Error("Lỗi");
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// };

export const requestlogin = async (data) => {
  try {
    const response = await fetch(`${SERVER_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(response); // Kiểm tra phản hồi từ API

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Lỗi không xác định từ server");
    }

    return await response.json(); // Trả về dữ liệu JSON từ server
  } catch (err) {
    console.error("Error:", err.message || "Lỗi không xác định");
    return undefined; // Trả về undefined nếu có lỗi
  }
};
export const requestRender = async () => {
  try {
    const response = await fetch(`${SERVER_API}/blogs`);

    console.log(response); // Kiểm tra phản hồi từ API

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Lỗi không xác định từ server");
    }

    return await response.json(); // Trả về dữ liệu JSON từ server
  } catch (err) {
    console.error("Error:", err.message || "Lỗi không xác định");
    return undefined; // Trả về undefined nếu có lỗi
  }
};
