import {API} from "../api";

export async function getEpisodes(page = 1) {
    const response = await API.get(`/episode?page=${page}`);
    return response.data;
}