import { useQuery } from '@tanstack/react-query';
import { getCharacters, getPrincipalCharacter, getCharacter, getManyCharacters } from '../services/personagemService';

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

export const useListManyPersonagens = (ids: number[]) => {
  return useQuery({
    queryKey: ['personagens', ids],
    queryFn: () => getManyCharacters(ids),
    enabled: ids.length > 0,
  });
};
