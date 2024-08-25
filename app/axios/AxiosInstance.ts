import axios from "axios";

const instanceAxios = axios.create({
  baseURL: "http://localhost:8989/api/",
});

export default instanceAxios;
