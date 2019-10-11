import axios from "axios";

const api = axios.create({
  baseURL: "http://q3-55g.anonymous.mobile.exp.direct:3333"
});

export default api;
