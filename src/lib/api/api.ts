import axios from "axios";

const URLPROD = "https://rickandmortyapi.com/api"

export const API = axios.create({
  baseURL: URLPROD,
});