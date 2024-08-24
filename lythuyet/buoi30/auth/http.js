import { config } from "./config.js";
import { httpclient } from "./httpclient.js";
const { SERVER_API } = config;
const authClient = httpclient.create({
  baseUrl: SERVER_API,
});

authClient.request(function (config) {
  // viết logic sửa requet tại đây
  try {
    if (localStorage.getItem("user_token")) {
      const { access_token: accessToken } = JSON.parse(
        localStorage.getItem("user_token")
      );
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
  } catch (e) {
    console.log(e);
  }
  return config;
});

authClient.requestConfig(function (response) {
  console.log(response);
  return response;
});

export const requestlogin = async (data) => {
  const response = await authClient.post(`/auth/login`, data);
  if (response.ok) {
    console.log(response);
    return response.data;
  }
  return false;
};

export const requestProfile = async (access_token) => {
  const response = await authClient.get(`/auth/profile`);
  if (!response.ok) {
    return false;
  }
  return response.data;
};
export const refreshToken = async (refreshToken) => {
  const response = authClient.post(`/auth/refresh-token`, {
    refreshToken,
  });
  if (!response.ok) {
    return false;
  }
  return response.data;
};
