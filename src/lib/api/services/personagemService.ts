import { API } from "../api";

export async function getCharacters(page = 1) {
  const response = await API.get(`/character/?page=${page}`);
  return response.data;
}

export async function getPrincipalCharacter() {
  const response = await API.get(`/character/1,2,3,4,5`);
  return response.data;
}

export async function getCharacter(id: number | null) {
  const response = await API.get(`/character/${id}`);
  return response.data;
}

export const getManyCharacters = async (ids: number[]) => {
  const idsString = ids.join(",");
  const res = await fetch(`https://rickandmortyapi.com/api/character/${idsString}`);
  const data = await res.json();
  return Array.isArray(data) ? data : [data];
};