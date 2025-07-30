import { useQuery } from "@tanstack/react-query";
import { getEpisodes } from "../services/episodiosService";

export const useListEpisodios = (page: number) => {
    return useQuery({
        queryKey: ['episodios', page],
        queryFn: () => getEpisodes(page),
    })
};