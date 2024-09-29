const URL_API = "https://api-exercise-sopi.vercel.app/api/v1";

export const loginApi = async (gmail) => {
  try {
    const response = await fetch(`${URL_API}/api-key?email=${gmail}`);
    if (!response.ok) {
      throw new Error("Lỗi api");
    }
    const data = await response.json();
    console.log(data);

    return data;
  } catch (err) {
    console.error(err);
  }
};

export const renderApi = async () => {
  try {
    const response = await fetch(`${URL_API}/products`);
    if (!response.ok) {
      throw new Error("Lỗi api");
    }
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
export const profileApi = async (apiKey) => {
  try {
    const response = await fetch(`${URL_API}/users/profile`, {
      headers: {
        "X-Api-Key": apiKey,
      },
    });
    if (!response.ok) {
      if (data.code === 401) {
        return { code: 401, message: data.message };
      }
      throw new Error("Lỗi api");
    }
    const data = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
};
