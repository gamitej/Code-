import http from "../../httpServices/httpServices";
import config from "../../config.json";

const endpoint = config.apiEndpoint + "/login";

export async function postSignup(req) {
  const { data } = await http.post(endpoint, req);
  return data;
}
