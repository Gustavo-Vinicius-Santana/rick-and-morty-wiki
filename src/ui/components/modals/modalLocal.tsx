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

export default function ModalLocal() {
    const { isOpen, onOpen, onClose } = useModalLocalStore();
    
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