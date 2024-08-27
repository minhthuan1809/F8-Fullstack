import { refreshToken } from "./callApi";
const token = JSON.parse(localStorage.getItem("user_token"));
const { refreshToken: _refreshToken } = token;
const newToken = refreshToken(_refreshToken);
