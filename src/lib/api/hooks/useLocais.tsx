import {useQuery} from "@tanstack/react-query";
import {getLocations, getLocation} from "../services/locaisService";

export const useListLocais = (page: number) => {
    return useQuery({
        queryKey: ['locais', page],
        queryFn: () => getLocations(page),
    })
};

export const useListEspecificLocal = (id: number | null) => {
    return useQuery({
        queryKey: ['local', id],
        queryFn: () => getLocation(id!),
         enabled: id !== null,
    })
};