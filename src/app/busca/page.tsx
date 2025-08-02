"use client";

import { useState, useEffect, useCallback } from "react";
import { useBusca } from "@/lib/api/hooks/useBusca";
import { ScrollArea } from "@/ui/shadcn/components/scroll-area";
import Paginacao from "@/ui/components/pagination/paginacao";
import CardPersonagem from "@/ui/components/cards/cardPersonagem";
import CardEpisodio from "@/ui/components/cards/cardEpisodio";
import CardLocal from "@/ui/components/cards/cardLocal";

interface Personagem {
  id: number;
  name: string;
  image: string;
}

interface Episodio {
  id: number;
  name: string;
  episode: string;
  air_date: string;
}

interface Local {
  id: number;
  name: string;
  type: string;
  dimension: string;
}

export default function Page() {
  const [tipo, setTipo] = useState("character");
  const [termo, setTermo] = useState("");
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const [endpoint, setEndpoint] = useState("");

  const { data, isLoading, isError } = useBusca(endpoint);

  const construirUrl = useCallback(
    (pagina: number) => {
      const params = new URLSearchParams();
      params.append("name", termo.trim());
      params.append("page", pagina.toString());

      if (tipo === "character") {
        if (status) params.append("status", status);
        if (gender) params.append("gender", gender);
      }

      return `/${tipo}/?${params.toString()}`;
    },
    [termo, tipo, status, gender]
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!termo.trim()) return;
    setPage(1);
    const novaUrl = construirUrl(1);
    setEndpoint(novaUrl);
  }

  useEffect(() => {
    if (!termo.trim()) return;
    const novaUrl = construirUrl(page);
    setEndpoint(novaUrl);
  }, [page, termo, construirUrl]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Busca</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <select
            value={tipo}
            onChange={(e) => {
              setTipo(e.target.value);
              setStatus("");
              setGender("");
              setPage(1);
              setEndpoint("");
            }}
            className="px-4 py-2 border rounded-2xl w-full md:w-40"
          >
            <option value="character">Personagem</option>
            <option value="location">Local</option>
            <option value="episode">Episódio</option>
          </select>

          <input
            type="text"
            value={termo}
            onChange={(e) => setTermo(e.target.value)}
            placeholder="Digite o nome para buscar"
            className="flex-1 px-4 py-2 border rounded-2xl"
          />

          <button
            type="submit"
            className="px-6 py-2 bg-white text-black border rounded-2xl hover:bg-gray-100 transition"
          >
            Buscar
          </button>
        </div>

        {tipo === "character" && (
          <div className="flex flex-col md:flex-row gap-4">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="px-4 py-2 border rounded-2xl w-full md:w-1/2"
            >
              <option value="">Status</option>
              <option value="alive">Alive</option>
              <option value="dead">Dead</option>
              <option value="unknown">Unknown</option>
            </select>

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="px-4 py-2 border rounded-2xl w-full md:w-1/2"
            >
              <option value="">Gênero</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="genderless">Genderless</option>
              <option value="unknown">Unknown</option>
            </select>
          </div>
        )}
      </form>

      {isLoading && <div>Carregando...</div>}
      {isError && <div>Erro ao carregar dados.</div>}

      {data?.results?.length > 0 ? (
        <>
          <ScrollArea className="max-h-[480px] overflow-y-auto rounded-md border mb-8">
            <ul className="flex flex-col items-center space-y-2">
              {tipo === "character" &&
                data.results.map((personagem: Personagem) => (
                  <CardPersonagem
                    key={personagem.id}
                    id={personagem.id}
                    image={personagem.image}
                    name={personagem.name}
                  />
                ))}

              {tipo === "episode" &&
                data.results.map((episodio: Episodio) => (
                  <CardEpisodio
                    key={episodio.id}
                    id={episodio.id}
                    name={episodio.name}
                    episode={episodio.episode}
                    air_date={episodio.air_date}
                  />
                ))}

              {tipo === "location" &&
                data.results.map((local: Local) => (
                  <CardLocal
                    key={local.id}
                    id={local.id}
                    name={local.name}
                    type={local.type}
                    dimension={local.dimension}
                  />
                ))}
            </ul>
          </ScrollArea>

          {data.info?.pages > 1 && (
            <Paginacao
              page={page}
              totalPages={data.info.pages}
              hasNextPage={data.info.next}
              setPage={setPage}
            />
          )}
        </>
      ) : (
        endpoint && !isLoading && !isError && <div>Nenhum resultado encontrado.</div>
      )}
    </div>
  );
}