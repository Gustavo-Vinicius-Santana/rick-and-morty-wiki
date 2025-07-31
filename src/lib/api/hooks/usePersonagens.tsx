import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCharacters } from '../services/personagemService';

export const useListPersonagens = (page: number) => {
    return useQuery({
        queryKey: ['personagens', page],
        queryFn: () => getCharacters(page),
    })
};
