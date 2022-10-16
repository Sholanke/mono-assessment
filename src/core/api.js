import axios from "axios";

export const connectApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_CONNECT_API,
  timeout: 1000,
  //   headers: {
  //     "x-session-id": "foobar",
  //     "mono-sec-key": process.env.MONO_SEC_KEY,
  //   },
});
