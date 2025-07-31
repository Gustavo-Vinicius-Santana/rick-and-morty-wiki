import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCharacters, getPrincipalCharacter } from '../services/personagemService';

export const useListPersonagens = (page: number) => {
    return useQuery({
        queryKey: ['personagens', page],
        queryFn: () => getCharacters(page),
    })
};

export const useListPersonagemsPrincipais = () => {
    return useQuery({
        queryKey: ['personagensPrincipais'],
        queryFn: () => getPrincipalCharacter(),
    })
};
