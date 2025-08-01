"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/shadcn/components/dialog";

import { useModalLocalStore } from "@/lib/stores/modalStore";
import { useListEspecificLocal } from "@/lib/api/hooks/useLocais";

export default function ModalLocal() {
    const { isOpen, id, onOpen, onClose } = useModalLocalStore();
    const { data, isLoading, isError } = useListEspecificLocal(id);

    if (isLoading) return <div className="text-center py-20">Carregando...</div>;
    if (isError) return <div className="text-center text-red-500">Erro ao carregar local.</div>;

    console.log("id no modal de local", id);
    console.log("local no modal:", data);
    
    return(
        <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
            <DialogHeader>
            <DialogTitle>MODAL DE LOCAL</DialogTitle>
            <DialogDescription>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloribus quos animi nisi, voluptatum iure aliquam ipsam optio qui illo voluptatem quam. Expedita natus fugiat repellendus explicabo, nihil illo doloremque?
            </DialogDescription>
            </DialogHeader>
        </DialogContent>
        </Dialog>
    )
}