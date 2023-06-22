import http from "../../httpServices/httpServices";
import config from "../../config.json";

const endpoint = config.apiEndpoint + "/pin-api";

export async function getAllPins() {
  const { data } = await http.get(endpoint);
  return data;
}
