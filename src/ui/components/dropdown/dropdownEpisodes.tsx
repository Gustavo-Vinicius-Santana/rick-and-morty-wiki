import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/ui/shadcn/components/collapsible";
import CardEpisodio from "@/ui/components/cards/cardEpisodio";
import { useState } from "react";

import { ScrollArea } from "@/ui/shadcn/components/scroll-area";

interface Episodio {
  id: number;
  name: string;
  episode: string;
  air_date: string;
  // Adicione outros campos explicitamente aqui, se precisar
}

type Props = {
  temporada: string;
  episodios: Episodio[];
};

export default function DropdownEpisodes({ temporada, episodios }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="border rounded-lg shadow-sm">
      <CollapsibleTrigger
        className="flex justify-between items-center w-full px-6 py-4 bg-gray-100 hover:bg-gray-200 focus:outline-none cursor-pointer select-none rounded-t-lg"
      >
        <h2 className="text-2xl font-semibold text-gray-700">
          Temporada {temporada.replace("S", "")}
        </h2>
        <span
          className={`transform transition-transform duration-300 ease-in-out text-gray-600`}
          aria-hidden="true"
          style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          ▶
        </span>
      </CollapsibleTrigger>

      <CollapsibleContent>
        <ScrollArea className="max-h-[400px] overflow-y-auto px-6 pb-6 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {episodios.map((episodio: Episodio) => (
              <CardEpisodio
                key={episodio.id}
                id={episodio.id}
                name={episodio.name}
                episode={episodio.episode}
                air_date={episodio.air_date}
              />
            ))}
          </div>
        </ScrollArea>
      </CollapsibleContent>
    </Collapsible>
  );
}