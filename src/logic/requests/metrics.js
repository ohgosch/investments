import API from "logic/api";

export async function getMetrics(min, max) {
  return await API().get('/mock-data.js');
}
