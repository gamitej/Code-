import http from "../../httpServices/httpServices";
import config from "../../config.json";

const endpoint = config.apiEndpoint;

export async function postQuestion(req) {
  try {
    const { data } = await http.post(`${endpoint}/add-questions`, req);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error, error.message);
  }
}

export async function getProfileDropdowns() {
  try {
    const { data } = await http.get(`${endpoint}/profile/dropdown-data`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error, error.message);
  }
}
