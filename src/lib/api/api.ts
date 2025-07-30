import axios from "axios";

const URLPROD = "https://rickandmortyapi.com/api"
const LOCAL = ""


export const API = axios.create({
  baseURL: URLPROD,
});