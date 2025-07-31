"use client";

import { useListEpisodios } from "@/lib/api/hooks/useEpisodios";
import CardPersonagem from "@/ui/components/cards/cardPersonagem";

export default function Page() {
  const { data, isLoading, isError } = useListEpisodios(1);

  if (isLoading) return <div className="text-center py-10">Carregando...</div>;
  if (isError) return <div className="text-center py-10 text-red-500">Erro ao carregar os personagens.</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Episodios
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {data.results.map((personagem: any) => (
          <CardPersonagem key={personagem.id} />
        ))}
      </div>
    </div>
  );
}