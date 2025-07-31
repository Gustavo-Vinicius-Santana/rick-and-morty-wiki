import { useQuery } from "@tanstack/react-query";
import { getEpisodes, getAllEpisodes } from "../services/episodiosService";

export const useListEpisodios = (page: number) => {
    return useQuery({
        queryKey: ['episodios', page],
        queryFn: () => getEpisodes(page),
    })
};

export const useListAllEpisodios = () => {
    return(useQuery({
        queryKey: ['allEpisodios'],
        queryFn: () => getAllEpisodes(),
        staleTime: 1000 * 60 * 5
    }))
}