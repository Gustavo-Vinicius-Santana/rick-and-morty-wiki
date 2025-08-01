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
    const { isOpen, id, onOpen, onClose } = useModalPersonagemStore();
    const { data, isLoading, isError } = useListEspecificPersonagem(id);

    console.log("id no modal de personagem", id);
    
    if (isLoading) return <div className="text-center py-20">Carregando...</div>;
    if (isError) return <div className="text-center text-red-500">Erro ao carregar personagem.</div>;

    console.log("personagem no modal:", data);
    
    return(
        <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>MODAL DE PERSONAGEM</DialogTitle>
            <DialogDescription>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim iure et quisquam quibusdam veritatis accusamus asperiores sapiente reiciendis dolores dolor, exercitationem numquam voluptatem, ipsum corporis sed vitae, recusandae incidunt laborum.
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    )
}