"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/ui/shadcn/components/dialog";
import { ScrollArea } from "@/ui/shadcn/components/scroll-area";

import { useModalEpisodioStore } from "@/lib/stores/modalStore";
import { useListEspecificEpisodio } from "@/lib/api/hooks/useEpisodios";
import { useListManyPersonagens } from "@/lib/api/hooks/usePersonagens";
import CardPersonagem from "@/ui/components/cards/cardPersonagem";

export default function ModalEpisodio() {
  const { isOpen, id, onClose } = useModalEpisodioStore();

  const { data, isLoading, isError } = useListEspecificEpisodio(id);

  const characterIds = (data?.characters || []).map((url: string) =>
    Number(url.split("/").pop())
  );

  const {
    data: personagens,
    isLoading: isLoadingPersonagens,
    isError: isErrorPersonagens,
  } = useListManyPersonagens(characterIds);

  if (!isOpen || !id) return null;

  if (isLoading || isLoadingPersonagens)
    return <div className="text-center py-20">Carregando...</div>;

  if (isError || !data || isErrorPersonagens || !personagens)
    return (
      <div className="text-center text-red-500">
        Erro ao carregar episódio ou personagens.
      </div>
    );

  const listaPersonagens = Array.isArray(personagens)
    ? personagens
    : [personagens];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md max-h-[80vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{data.name}</DialogTitle>
        </DialogHeader>

        <div className="mt-4 space-y-3 text-sm">
          <p>
            <strong>Data de exibição:</strong> {data.air_date}
          </p>
          <p>
            <strong>Episódio:</strong> {data.episode}
          </p>

          <div>
            <strong>Personagens:</strong>
            <ScrollArea className="mt-2 h-64 pr-2">
              <div className="flex flex-col items-center justify-start space-y-2">
                {listaPersonagens.map((personagem) => (
                  <CardPersonagem
                    key={personagem.id}
                    id={personagem.id}
                    image={personagem.image}
                    name={personagem.name}
                  />
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}