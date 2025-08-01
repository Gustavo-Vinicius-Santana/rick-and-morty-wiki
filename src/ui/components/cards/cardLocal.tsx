"use client";

import { useModalLocalStore } from "@/lib/stores/modalStore";

type Props = {
  name: string;
  type: string;
  dimension: string;
};

export default function CardLocal({ name, type, dimension }: Props) {
  const { onOpen } = useModalLocalStore();
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm cursor-pointer" onClick={() => onOpen()}>
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600"><span className="font-semibold">Tipo:</span> {type}</p>
      <p className="text-gray-600"><span className="font-semibold">Dimensão:</span> {dimension}</p>
    </div>
  );
}