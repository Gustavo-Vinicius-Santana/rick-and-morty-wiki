"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/ui/shadcn/components/dialog";

import { useModalPersonagemStore } from "@/lib/stores/modalStore";
import { useListEspecificPersonagem } from "@/lib/api/hooks/usePersonagens";
import { useListAllEpisodios } from "@/lib/api/hooks/useEpisodios";
import CardEpisodio from "@/ui/components/cards/cardEpisodio";

export default function ModalPersonagem() {
  const { isOpen, id, onClose } = useModalPersonagemStore();

  // CHAMADAS DOS HOOKS SEMPRE
  const personagemQuery = useListEspecificPersonagem(id);
  const episodiosQuery = useListAllEpisodios();

  // Extrai dados
  const { data, isLoading, isError } = personagemQuery;
  const {
    data: allEpisodes,
    isLoading: isLoadingEpisodes,
    isError: isErrorEpisodes,
  } = episodiosQuery;

  // Se modal fechado ou id inválido, não renderiza nada (mas hooks já rodaram)
  if (!isOpen || !id) return null;

  if (isLoading || isLoadingEpisodes)
    return <div className="text-center py-20">Carregando...</div>;

  if (isError || !data || isErrorEpisodes || !allEpisodes)
    return (
      <div className="text-center text-red-500">
        Erro ao carregar personagem ou episódios.
      </div>
    );

  // Extrai ids dos episódios do personagem
  const personagemEpisodeIds = data.episode.map((url: string) =>
    Number(url.split("/").pop())
  );

  // Filtra os episódios para mostrar só os do personagem
  const episodiosPersonagem = allEpisodes.filter((ep) =>
    personagemEpisodeIds.includes(ep.id)
  );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{data.name}</DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-3 text-sm">
          <div className="flex items-center space-x-4">
            <img
              src={data.image}
              alt={data.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="space-y-1">
              <p>
                <strong>Status:</strong> {data.status}
              </p>
              <p>
                <strong>Espécie:</strong> {data.species}
              </p>
              {data.type && (
                <p>
                  <strong>Tipo:</strong> {data.type}
                </p>
              )}
              <p>
                <strong>Gênero:</strong> {data.gender}
              </p>
            </div>
          </div>

          <p>
            <strong>Origem:</strong> {data.origin.name}
          </p>

          <p>
            <strong>Localização Atual:</strong> {data.location.name}
          </p>

          <div>
            <strong>Episódios do Personagem:</strong>
            <div
              className="mt-2 max-h-64 overflow-y-auto space-y-2"
              role="list"
            >
              {episodiosPersonagem.map((ep) => (
                <CardEpisodio
                  key={ep.id}
                  id={ep.id}
                  name={ep.name}
                  episode={ep.episode}
                  air_date={ep.air_date}
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}