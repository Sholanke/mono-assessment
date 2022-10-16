import { connectApi } from "../../../../core";
import { connectApiHeaders } from "./constants";

export default function loginToInstitution({ body, sessionId }) {
  return connectApi.post("/connect/login", body, {
    headers: { ...connectApiHeaders, "x-session-id": sessionId },
  });
}
