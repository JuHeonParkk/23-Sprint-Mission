import Axios from "axios";

const instance = Axios.create({
  baseURL: `${import.meta.env.VITE_PANDA_MARKET_BASE_URL}`,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
