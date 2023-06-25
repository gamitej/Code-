import http from "../../httpServices/httpServices";
import config from "../../config.json";

const endpoint = config.apiEndpoint;

export async function getSelectedTopicData(id = 1, topic = "Arrays") {
  const { data } = await http.get(
    `${endpoint}/selected_topic?id=${id}&topic=${topic}`
  );
  return data;
}
