/// httpclient.get('/path')
/// httpclient.post('/path',body)
/// httpclient.put('/path',body)
/// httpclient.patch('/path',body)

// import { requestlogin } from "./http";

/// httpclient.delete('/path',body)
export const httpclient = {
  name: "HttpClient",
  baseUrl: null,
  headers: {},
  requestConfig: null,
  create: function ({ baseUrl, headers = {} }) {
    this.baseUrl = baseUrl;
    const instance = { ...this };
    instance.baseUrl = baseUrl;
    instance.headers = headers;
    return this;
  },
  send: async function (path, method = "GET", body = null, headers = {}) {
    try {
      let url = path;
      if (this.baseUrl) {
        url = `${this.baseUrl}${path}`;
      }
      const options = {
        method,
        headers: { ...this.headers, ...headers },
      };
      if (body) {
        options.body = JSON.stringify(body);
        options.headers["Content-type"] = "application/json";
      }
      let initialRequest = { ...options };
      if (this.requestConfig) {
        initialRequest = this.requestConfig(initialRequest);
      }
      if (response.name === "HttpClient") {
        return this.send(path, method, body, headers);
      }

      const response = await fetch(url, initialRequest);
      if (!response.ok) {
        throw new Error("lỗi");
      }
      if (this.requestConfig) {
        console.log(this.requestConfig);
      }
      let responseClone = response.clone();
      if (this.requestConfig) {
        responseClone = await this.requestConfig(responseClone);
      }
      console.log(responseClone);

      const data = await response.json();
      response.data = data;
      return response;
    } catch (e) {
      return false;
    }
  },
  request: function (callback) {
    if (typeof callback === "function") {
      this.requestConfig = callback;
    }
  },
  response: function () {
    if (typeof callback === "function") {
      this.responseConfig = callback;
    }
  },
  get: function (path, headers = {}) {
    return this.send(path, "GET", null, headers);
  },
  post: function (path, body = null, headers = {}) {
    return this.send(path, "POST", body, headers);
  },
  put: function (path, body = null, headers = {}) {
    return this.send(path, "PUT", body, headers);
  },
  patch: function (path, body = null, headers = {}) {
    return this.send(path, "PATCH", body, headers);
  },
  delete: function (path, body = null, headers = {}) {
    return this.send(path, "DELETE", null, headers);
  },
};
