"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/ui/shadcn/components/dialog";

import { useModalPersonagemStore } from "@/lib/stores/modalStore";
import { useListEspecificPersonagem } from "@/lib/api/hooks/usePersonagens";

export default function ModalPersonagem() {
  const { isOpen, id, onClose } = useModalPersonagemStore();
  const { data, isLoading, isError } = useListEspecificPersonagem(id);

  if (!isOpen || !id) return null;

  if (isLoading) {
    return <div className="text-center py-20">Carregando...</div>;
  }

  if (isError || !data) {
    return (
      <div className="text-center text-red-500">
        Erro ao carregar personagem.
      </div>
    );
  }
    return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
            <DialogHeader>
            <DialogTitle className="text-xl font-bold">{data.name}</DialogTitle>
            {/* Remover o DialogDescription se não for um texto simples */}
            </DialogHeader>

            {/* Conteúdo principal do modal fora do DialogDescription */}
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

            <p>
                <strong>Primeiros Episódios:</strong>{" "}
                {(data.episode as any[]).slice(0, 3).map((epUrl: any, index: number) => (
                <span key={epUrl}>
                    {index > 0 && ", "}
                    {`#${epUrl.split("/").pop()}`}
                </span>
                ))}
            </p>
            </div>
        </DialogContent>
    </Dialog>
);
}