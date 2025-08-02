"use client";

import { useModalEpisodioStore } from "@/lib/stores/modalStore";

type Props = {
  id: number;
  name: string;
  episode: string;
  air_date: string;
};

export default function CardEpisodio({ name, episode, air_date, id }: Props) {
  const { onOpen } = useModalEpisodioStore();

  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm cursor-pointer" onClick={() => onOpen(id)}>
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600"><span className="font-semibold">Episódio:</span> {episode}</p>
      <p className="text-gray-600"><span className="font-semibold">Lançamento:</span> {air_date}</p>
    </div>
  );
}