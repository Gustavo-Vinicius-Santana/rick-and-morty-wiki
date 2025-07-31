"use client";
import { useState } from "react";
import { useListPersonagens } from "@/lib/api/hooks/usePersonagens";
import CardPersonagem from "@/ui/components/cards/cardPersonagem";
import Paginacao from "@/ui/components/pagination/paginacao";
import { ScrollArea } from "@/ui/shadcn/components/scroll-area";

export default function Page() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useListPersonagens(page);

  if (isLoading) return <div className="text-center py-20">Carregando...</div>;
  if (isError) return <div className="text-center text-red-500">Erro ao carregar personagens.</div>;

  const totalPages = data.info.pages;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Personagens</h1>

      <ScrollArea className="max-h-[480px] overflow-y-auto rounded-md border mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center p-4">
          {data.results.map((personagem: any) => (
            <CardPersonagem key={personagem.id} image={personagem.image} name={personagem.name} />
          ))}
        </div>
      </ScrollArea>

      <Paginacao page={page} setPage={setPage} totalPages={totalPages} hasNextPage={data.info.next} />
    </div>
  );
}