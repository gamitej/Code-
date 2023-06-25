import http from "../../httpServices/httpServices";
import config from "../../config.json";

const endpoint = config.apiEndpoint;

export async function getAllTopics(id = 1) {
  const { data } = await http.get(`${endpoint}/topics?id=${id}`);
  return data;
}
