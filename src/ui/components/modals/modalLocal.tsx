"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/ui/shadcn/components/dialog";
import { ScrollArea } from "@/ui/shadcn/components/scroll-area";

import { useModalLocalStore } from "@/lib/stores/modalStore";
import { useListEspecificLocal } from "@/lib/api/hooks/useLocais";
import { useListManyPersonagens } from "@/lib/api/hooks/usePersonagens";
import CardPersonagem from "@/ui/components/cards/cardPersonagem";

export default function ModalLocal() {
  const { isOpen, id, onClose } = useModalLocalStore();

  const { data, isLoading, isError } = useListEspecificLocal(id);

  const residentIds = (data?.residents || []).map((url: string) =>
    Number(url.split("/").pop())
  );

  const {
    data: personagens,
    isLoading: isLoadingPersonagens,
    isError: isErrorPersonagens,
  } = useListManyPersonagens(residentIds);

  if (!isOpen || !id) return null;

  if (isLoading || isLoadingPersonagens)
    return <div className="text-center py-20">Carregando...</div>;

  if (isError || !data || isErrorPersonagens || !personagens)
    return (
      <div className="text-center text-red-500">
        Erro ao carregar local ou personagens.
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
            <strong>Tipo:</strong> {data.type || "Desconhecido"}
          </p>
          <p>
            <strong>Dimensão:</strong> {data.dimension || "Desconhecida"}
          </p>

          <div>
            <strong>Residentes:</strong>
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