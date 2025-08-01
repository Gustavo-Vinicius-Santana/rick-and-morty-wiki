"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/ui/shadcn/components/dialog";

import { useModalEpisodioStore } from "@/lib/stores/modalStore";
import { useListEspecificEpisodio } from "@/lib/api/hooks/useEpisodios";

export default function ModalEpisodio() {
  const { isOpen, id, onClose } = useModalEpisodioStore();

  const { data, isLoading, isError } = useListEspecificEpisodio(id);

  if (!isOpen || !id) return null;

  if (isLoading) return <div className="text-center py-20">Carregando...</div>;

  if (isError || !data)
    return (
      <div className="text-center text-red-500">
        Erro ao carregar episódio.
      </div>
    );

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
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
          <p>
            <strong>Personagens:</strong>{" "}
            {(data.characters as string[])
              .slice(0, 5)
              .map((charUrl, index) => (
                <span key={charUrl}>
                  {index > 0 && ", "}
                  {`#${charUrl.split("/").pop()}`}
                </span>
              ))}
            {data.characters.length > 5 && " ..."}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}