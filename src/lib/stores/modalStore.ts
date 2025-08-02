import { create } from "zustand";

type ModalStore = {
  isOpen: boolean;
  id: number | null;
  onOpen: (id: number) => void;
  onClose: () => void;
};

export const useModalEpisodioStore = create<ModalStore>((set) => ({
  isOpen: false,
  id: null,
  onOpen: (id) => set(() => ({ isOpen: true, id })),
  onClose: () => set(() => ({ isOpen: false, id: null })),
}));

export const useModalLocalStore = create<ModalStore>((set) => ({
  isOpen: false,
  id: null,
  onOpen: (id) => set(() => ({ isOpen: true, id })),
  onClose: () => set(() => ({ isOpen: false, id: null })),
}));

export const useModalPersonagemStore = create<ModalStore>((set) => ({
  isOpen: false,
  id: null,
  onOpen: (id) => set(() => ({ isOpen: true, id })),
  onClose: () => set(() => ({ isOpen: false, id: null })),
}));