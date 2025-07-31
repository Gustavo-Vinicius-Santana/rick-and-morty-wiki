"use client";

import { useListAllEpisodios } from "@/lib/api/hooks/useEpisodios";
import CardEpisodio from "@/ui/components/cards/cardEpisodio";

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

      {temporadasOrdenadas.map(([temporada, episodios]) => (
        <div key={temporada} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Temporada {temporada.replace("S", "")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {episodios.map((episodio: any) => (
              <CardEpisodio
                key={episodio.id}
                name={episodio.name}
                episode={episodio.episode}
                air_date={episodio.air_date}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}