"use client";

import { useState } from "react";
import { useBusca } from "@/lib/api/hooks/useBusca";

export default function Page() {
  const [tipo, setTipo] = useState("character"); // 'character', 'location', 'episode'
  const [termo, setTermo] = useState("");
  const [endpoint, setEndpoint] = useState(""); // Ex: /character/?name=rick

  const { data, isLoading, isError } = useBusca(endpoint);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!termo.trim()) return;

    const novaUrl = `/${tipo}/?name=${encodeURIComponent(termo.trim())}`;
    setEndpoint(novaUrl);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Busca</h1>

      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 mb-6">
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="px-4 py-2 border rounded"
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
          className="flex-1 px-4 py-2 border rounded"
        />

        <button
          type="submit"
          className="px-4 py-2 bg-white text-black border rounded hover:bg-gray-100"
        >
          Buscar
        </button>
      </form>

      {isLoading && <div>Carregando...</div>}
      {isError && <div>Erro ao carregar dados.</div>}

      {data?.results?.length > 0 ? (
        <ul className="space-y-2">
          {data.results.map((item: any) => (
            <li key={item.id} className="border p-3 rounded">
              {item.name}
            </li>
          ))}
        </ul>
      ) : (
        endpoint && !isLoading && !isError && <div>Nenhum resultado encontrado.</div>
      )}
    </div>
  );
}