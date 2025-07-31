"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/shadcn/components/carousel"

import CardPersonagem from "../cards/cardPersonagem";

export default function Carrousel() {

    return(
        <>
            <Carousel className="w-[75%] md:w-full">
                <CarouselPrevious />
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                        <CardPersonagem />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                        <CardPersonagem />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                        <CardPersonagem />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                        <CardPersonagem />
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3 flex justify-center">
                        <CardPersonagem />
                    </CarouselItem>
                </CarouselContent>
                <CarouselNext />
            </Carousel>
        </>
    )
}