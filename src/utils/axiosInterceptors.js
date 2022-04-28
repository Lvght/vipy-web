import api from "../services/api";

api.interceptors.request.use(
  (config) => {
    const tokens = localStorage.getItem("tokens");

    if (tokens) {
      const access_token = JSON.parse(tokens)["access"];
      console.log("teste");
      if (access_token) {
        config.headers.Authorization = `Bearer ${access_token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/profiles/refresh/")
    ) {
      originalRequest._retry = true;
      return api
        .post("/profiles/refresh/", {
          refresh: JSON.parse(localStorage.getItem("tokens"))["refresh"],
        })
        .then((res) => {
          if (res.status === 200) {
            // 1) put token to LocalStorage
            localStorage.setItem("tokens", JSON.stringify(res.data));

            // 2) Change Authorization header
            api.defaults.headers.common["Authorization"] =
              "Bearer " + res.data.access;

            // 3) return originalRequest object with Axios.
            return api(originalRequest);
          }
        });
    }
    // return Error object with Promise
    return Promise.reject(error);
  }
);
