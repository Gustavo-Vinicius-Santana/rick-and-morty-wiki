"use client";

import { useListAllEpisodios } from "@/lib/api/hooks/useEpisodios";
import DropdownEpisodes from "@/ui/components/dropdown/dropdownEpisodes";

export default function Page() {
  const { data, isLoading, isError } = useListAllEpisodios();

  if (isLoading) return <div className="text-center py-10">Carregando...</div>;
  if (isError) return <div className="text-center py-10 text-red-500">Erro ao carregar os episódios.</div>;

  // Organiza os episódios por temporada com base no prefixo "Sxx" do campo episode
  const episodiosPorTemporada: { [temporada: string]: any[] } = {};

  data?.forEach((episodio: any) => {
    const match = episodio.episode.match(/(S\d{2})E\d{2}/);
    const temporada = match ? match[1] : "Outros";

    if (!episodiosPorTemporada[temporada]) {
      episodiosPorTemporada[temporada] = [];
    }

    episodiosPorTemporada[temporada].push(episodio);
  });

  // Converte para array e ordena pela temporada
  const temporadasOrdenadas = Object.entries(episodiosPorTemporada).sort(
    ([a], [b]) => Number(a.slice(1)) - Number(b.slice(1))
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Episódios
      </h1>

      <div className="space-y-8">
        {temporadasOrdenadas.map(([temporada, episodios]) => (
          <DropdownEpisodes
            key={temporada}
            temporada={temporada}
            episodios={episodios}
          />
        ))}
      </div>
    </div>
  );
}