import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://panda-market-api.vercel.app/",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
