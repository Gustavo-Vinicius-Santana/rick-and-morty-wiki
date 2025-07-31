import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/ui/shadcn/components/collapsible";
import CardEpisodio from "@/ui/components/cards/cardEpisodio";
import { useState } from "react";

type Props = {
  temporada: string;
  episodios: any[];
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

      <CollapsibleContent
        className="px-6 pb-6 pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {episodios.map((episodio: any) => (
          <CardEpisodio
            key={episodio.id}
            name={episodio.name}
            episode={episodio.episode}
            air_date={episodio.air_date}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
}