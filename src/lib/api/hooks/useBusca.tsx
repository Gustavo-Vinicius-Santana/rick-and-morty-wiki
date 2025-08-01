import { useQuery } from "@tanstack/react-query";
import { getBusca } from "../services/buscaService";

export const useBusca = (busca: string) => {
    return useQuery({
        queryKey: ['busca', busca],
        queryFn: () => getBusca(busca),
    })
};