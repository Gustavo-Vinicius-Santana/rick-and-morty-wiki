import {API} from "../api";

export async function getLocations(page = 1) {
    const response = await API.get(`/location?page=${page}`);
    return response.data;
}