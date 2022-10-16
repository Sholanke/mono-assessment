import { connectApi } from "../../../../core";
import { connectApiHeaders } from "./constants";

export default function createConnectSession({ body = {} }) {
  body = { ...body, app: process.env.REACT_APP_MONO_APP_ID };

  return connectApi.post("/connect/session", body, {
    headers: connectApiHeaders,
  });
}
