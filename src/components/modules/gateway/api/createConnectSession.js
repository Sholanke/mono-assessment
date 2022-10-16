import { connectApi } from "../../../../core";

export default function createConnectSession({ body = {} }) {
  const headers = { "mono-sec-key": process.env.REACT_APP_MONO_SEC_KEY };
  body = { ...body, app: process.env.REACT_APP_MONO_APP_ID };

  return connectApi.post("/connect/session", body, { headers });
}
