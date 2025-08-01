"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/shadcn/components/carousel"

import CardPersonagem from "../cards/cardPersonagem";

type props = {
    list: any
}

export default function Carrousel({list}: props) {

    return(
        <>
            <Carousel className="w-[75%] md:w-full">
                <CarouselPrevious />
                <CarouselContent>
                    {list.map((personagem: any) => (
                        <CarouselItem key={personagem.id} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                            <CardPersonagem image={personagem.image} id={personagem.id} name={personagem.name} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselNext />
            </Carousel>
        </>
    )
}