import {useQuery} from "@tanstack/react-query";
import {getLocations} from "../services/locaisService";

export const useListLocais = (page: number) => {
    return useQuery({
        queryKey: ['locais', page],
        queryFn: () => getLocations(page),
    })
};