"use client";
import { useListLocais } from "@/lib/api/hooks/useLocais";
import CardLocal from "@/ui/components/cards/cardLocal";
import Paginacao from "@/ui/components/pagination/paginacao";
import { ScrollArea } from "@/ui/shadcn/components/scroll-area";
import { useState } from "react";

export default function Page() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useListLocais(page);

  if (isLoading) return <div className="text-center py-20">Carregando...</div>;
  if (isError) return <div className="text-center text-red-500">Erro ao carregar personagens.</div>;

  const totalPages = data.info.pages;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Locais
      </h1>

      <ScrollArea className="max-h-[480px] overflow-y-auto rounded-md border mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center p-4">
          {data.results.map((personagem: any) => (
            <CardLocal
              key={personagem.id}
              id={personagem.id}
              name={personagem.name}
              type={personagem.type}
              dimension={personagem.dimension}
            />
          ))}
        </div>
      </ScrollArea>

      <Paginacao page={page} setPage={setPage} totalPages={totalPages} hasNextPage={data.info.next} />
    </div>
  );
}