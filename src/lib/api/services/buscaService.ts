import {API} from "../api";

export async function getBusca(busca: string) {
    const response = await API.get(`${busca}`);  
    return response.data;
}