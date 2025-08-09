"use client";

import { useModalPersonagemStore } from "@/lib/stores/modalStore";

type Props = {
  id: number;
  image: string;
  name: string;
  status?: string;
  especie?: string;
  location?: string;
};

export default function CardPersonagem({ id, image, name, status, especie, location }: Props) {
  const { onOpen } = useModalPersonagemStore();

  return (
    <div
      className="w-64 bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
      onClick={() => onOpen(id)}
    >
      {/* Imagem */}
      <div className="w-full h-64 relative">
        <img
          src={image}
          alt="Personagem"
          className="w-full h-64 object-cover"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-4 text-center space-y-1">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

        {status && (
          <p className="text-sm text-gray-600">
            <strong>Status:</strong> {status}
          </p>
        )}
        {especie && (
          <p className="text-sm text-gray-600">
            <strong>Espécie:</strong> {especie}
          </p>
        )}
        {location && (
          <p className="text-sm text-gray-600">
            <strong>Localização:</strong> {location}
          </p>
        )}
      </div>
    </div>
  );
}