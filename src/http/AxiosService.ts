import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  params: { TOKEN: "" },
});

export default instance;
