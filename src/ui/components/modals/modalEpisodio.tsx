"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/shadcn/components/dialog";

import { useModalEpisodioStore } from "@/lib/stores/modalStore";
import { useListEspecificEpisodio } from "@/lib/api/hooks/useEpisodios";

export default function ModalEpisodio() {
    const { isOpen, id,  onOpen, onClose } = useModalEpisodioStore();
    const { data, isLoading, isError } = useListEspecificEpisodio(id);

    if (isLoading) return <div className="text-center py-20">Carregando...</div>;
    if (isError) return <div className="text-center text-red-500">Erro ao carregar episodio.</div>;

    console.log("id no modal de episodio", id);
    console.log("episodio no modal:", data);

    return(
        <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>MODAL DE EPISODIO</DialogTitle>
            <DialogDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nobis iste illum beatae exercitationem iure praesentium blanditiis ipsa qui? Eos sequi, tenetur dolor neque culpa amet modi dolore placeat vero.
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    )
}