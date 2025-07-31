import { API } from "../api";

export async function getCharacters(page = 1) {
  const response = await API.get(`/character/?page=${page}`);
  return response.data;
}

export async function getPrincipalCharacter() {
  const response = await API.get(`/character/1,2,3,4,5`);
  return response.data;
}