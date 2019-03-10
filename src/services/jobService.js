import http from "./httpService";
import { apiUrl } from "../config.json";

export async function publish(data) {
  await http.post(apiUrl + "/job", data);
}

export default {
  publish
};
