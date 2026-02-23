import Axios from "axios";

const products = Axios.create({
  baseURL: "https://panda-market-api.vercel.app/docs/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default products;
