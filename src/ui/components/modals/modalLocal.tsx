"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/ui/shadcn/components/dialog";

import { useModalLocalStore } from "@/lib/stores/modalStore";
import { useListEspecificLocal } from "@/lib/api/hooks/useLocais";

export default function ModalLocal() {
  const { isOpen, id, onClose } = useModalLocalStore();

  // ✅ Hook sempre chamado, mas não executa se `id` for nulo
  const { data, isLoading, isError } = useListEspecificLocal(id);

  // ✅ Protege a renderização (mas não o hook)
  if (!isOpen || !id) return null;

  if (isLoading)
    return <div className="text-center py-20">Carregando...</div>;

  if (isError || !data)
    return (
      <div className="text-center text-red-500">
        Erro ao carregar local.
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
            <strong>Tipo:</strong> {data.type || "Desconhecido"}
          </p>
          <p>
            <strong>Dimensão:</strong> {data.dimension || "Desconhecida"}
          </p>
          <p>
            <strong>Residentes:</strong>{" "}
            {(data.residents as any[])
              .slice(0, 5)
              .map((residentUrl: string, index: number) => (
                <span key={residentUrl}>
                  {index > 0 && ", "}
                  {`#${residentUrl.split("/").pop()}`}
                </span>
              ))}
            {data.residents.length > 5 && " ..."}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}