import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCharacters, getPrincipalCharacter, getCharacter } from '../services/personagemService';

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

export const useListEspecificPersonagem = (id: number | null) => {
  return useQuery({
    queryKey: ['personagem', id],
    queryFn: () => getCharacter(id!),
    enabled: id !== null,
  });
};
