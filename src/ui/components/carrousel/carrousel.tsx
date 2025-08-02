"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/shadcn/components/carousel";

import CardPersonagem from "../cards/cardPersonagem";

interface Personagem {
  id: number;
  name: string;
  image: string;
  // outros campos explícitos, se houver, ex:
  // status?: string;
  // species?: string;
}

type Props = {
  list: Personagem[];
};

export default function Carrousel({ list }: Props) {
  return (
    <>
      <Carousel className="w-[75%] md:w-full">
        <CarouselPrevious />
        <CarouselContent>
          {list.map((personagem) => (
            <CarouselItem
              key={personagem.id}
              className="md:basis-1/2 lg:basis-1/3 flex justify-center"
            >
              <CardPersonagem
                image={personagem.image}
                id={personagem.id}
                name={personagem.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </>
  );
}