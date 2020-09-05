import axios from "axios";
const instance = axios.create({
  baseURL: "https://tiktok-clone-mern-stack.herokuapp.com/",
});
export default instance