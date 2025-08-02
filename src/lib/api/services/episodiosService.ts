import { API } from "../api";

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Episodio {
  id: number;
  name: string;
  episode: string; // Ex: "S01E05"
  air_date: string;
  characters: string[]; 
}

interface EpisodiosResponse {
  info: Info;
  results: Episodio[];
}

export async function getEpisodes(page = 1): Promise<EpisodiosResponse> {
  const response = await API.get<EpisodiosResponse>(`/episode?page=${page}`);
  return response.data;
}

export async function getAllEpisodes(): Promise<Episodio[]> {
  const allEpisodes: Episodio[] = [];
  let page = 1;
  let hasNext = true;

  while (hasNext) {
    const response = await API.get<EpisodiosResponse>(`/episode?page=${page}`);
    const data = response.data;

    allEpisodes.push(...data.results);

    hasNext = data.info.next !== null;
    page++;
  }

  return allEpisodes;
}

export async function getEpisode(id: number): Promise<Episodio> {
  const response = await API.get<Episodio>(`/episode/${id}`);
  return response.data;
}