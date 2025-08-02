"use client";

import { useModalPersonagemStore } from "@/lib/stores/modalStore";

type props = {
  id: number;
  image: string;
  name: string;
}

export default function CardPersonagem({ image, name, id }: props) {
  const { onOpen } = useModalPersonagemStore();

  return (
    <div className="w-64 bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer" onClick={() => onOpen(id)}>
      {/* Seção da imagem */}
      <div className="w-full h-64 relative">
        <img
          src={image}
          alt="Personagem"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Seção do nome */}
      <div className="p-4 text-center" >
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      </div>
    </div>
  );
}