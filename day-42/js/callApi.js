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
  console.log(accessToken);

  try {
    const response = await fetch(`${url}/blogs`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`, // Sử dụng accessToken ở đây
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
