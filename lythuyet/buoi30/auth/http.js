import { config } from "./config.js";
const { SERVER_API } = config;
export const requestlogin = async (data) => {
  try {
    const response = await fetch(`${SERVER_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("lỗi ");
    }
    return response.json();
  } catch {
    console.log("error");
  }
};

export const requestProfile = async (access_token) => {
  try {
    const response = await fetch(`${SERVER_API}/auth/profile`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    if (!response.ok) {
      throw new Error("err..");
    }
    return response.json();
  } catch {
    return false;
  }
};
export const refreshToken = async (refreshToken) => {
  try {
    const response = await fetch(`${SERVER_API}/auth/refresh-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refreshToken }),
    });
    if (!response.ok) {
      throw new Error("err..");
    }
    return response.json();
  } catch {
    return false;
  }
};
