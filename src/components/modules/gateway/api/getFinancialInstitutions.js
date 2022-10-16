import { connectApi } from "../../../../core";

export default function getFinancialInstitutions() {
  return connectApi.get("/institutions");
}
