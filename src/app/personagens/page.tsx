"use client";
import { useListPersonagens } from "@/lib/api/hooks/usePersonagens";
import CardPersonagem from "@/ui/components/cards/cardPersonagem";

export default function page() {
    const {data, isLoading, isError} = useListPersonagens(1);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    console.log(data);

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                Personagens
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {data.results.map((personagem: any) => (
                <CardPersonagem key={personagem.id} image={personagem.image} name={personagem.name} />
                ))}
            </div>
        </div>
    )
}