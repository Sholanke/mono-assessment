import { connectApi } from "../../../../core";
import { connectApiHeaders } from "./constants";

export default function reCommitSession({ body, sessionId }) {
  return connectApi.post("/connect/commit", body, {
    headers: { ...connectApiHeaders, "x-session-id": sessionId },
  });
}
