"use client";

import Image from "next/image";

export default function CardPersonagem() {
  return (
    <div className="w-64 bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Seção da imagem */}
      <div className="w-full h-64 relative">
        <Image
          src="/serie.jpeg"
          alt="Personagem"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Seção do nome */}
      <div className="p-4 text-center">
        <h2 className="text-lg font-semibold text-gray-800">Nome do Personagem</h2>
      </div>
    </div>
  );
}