import {API} from "../api";

export async function getEpisodes(page = 1) {
    const response = await API.get(`/episode?page=${page}`);
    return response.data;
}

export async function getAllEpisodes() {
  let allEpisodes: any[] = [];
  let page = 1;
  let hasNext = true;

  while (hasNext) {
    const response = await API.get(`/episode?page=${page}`);
    const data = response.data;

    allEpisodes.push(...data.results);

    hasNext = !!data.info.next;
    page++;
  }

  return allEpisodes;
}