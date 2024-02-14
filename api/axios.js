import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "0f989b95d725b9db661ecd169c0d7abd",
    language: "ko-KR",
  },
});

export default instance;
