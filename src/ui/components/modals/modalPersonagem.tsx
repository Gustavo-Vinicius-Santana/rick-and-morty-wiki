"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/ui/shadcn/components/dialog";

import { useModalPersonagemStore } from "@/lib/stores/modalStore";

export default function ModalPersonagem() {
    const { isOpen, onOpen, onClose } = useModalPersonagemStore();
    
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