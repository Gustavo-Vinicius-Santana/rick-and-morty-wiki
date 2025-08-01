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

export default function ModalEpisodio() {
    const { isOpen, id,  onOpen, onClose } = useModalEpisodioStore();

    console.log("id no modal de episodio", id);

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