import { API } from "../api";

export async function getCharacters(page = 1) {
  const response = await API.get(`/character?page=${page}`);
  return response.data;
}