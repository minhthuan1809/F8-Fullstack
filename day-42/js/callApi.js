let url = "https://api-auth-two.vercel.app";

// render
export const connectApi = async () => {
  try {
    const response = await fetch(`${url}/blogs`);
    if (!response.ok) {
      throw new Error("Lỗi: " + response.statusText);
    }
    const data = await response.json();
    console.log(data);

    return data;
  } catch (e) {
    console.log(e.message);
  }
};

// login
export const requestlogin = async (data) => {
  try {
    const response = await fetch(`${url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Lỗi: " + response.statusText);
    }
    return await response.json();
  } catch (e) {
    console.log(e.message);
  }
};

// thêm data
export const addData = async (newData, accessToken) => {
  try {
    const response = await fetch(`${url}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`, // Thêm "Bearer " trước accessToken
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      throw new Error("Lỗi: " + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
};

// refreshToken

export const refreshToken = async (refreshToken) => {
  try {
    const response = await fetch(`${url}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken: refreshToken }),
    });

    if (!response.ok) {
      throw new Error("Lỗi làm mới token: " + response.statusText);
    }

    const data = await response.json();
    return data.data.token;
  } catch (e) {
    console.error(e.message);
  }
};
// tạo tài khoản
export const createAcc = async (data) => {
  try {
    console.log("Đang tạo tài khoản...");

    const response = await fetch(`${url}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(response);

    if (!response.ok) {
      throw new Error("Lỗi: " + response.statusText);
    }

    const responseData = await response.json();
    return responseData;
  } catch (e) {
    console.error("Error creating account:", e.message);
  }
};
