"use client";
import { useListLocais } from "@/lib/api/hooks/useLocais";
import CardLocal from "@/ui/components/cards/cardLocal";

export default function page(){
    const {data, isLoading, isError} = useListLocais(1);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    console.log(data);
    return(
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">
                Locais
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {data.results.map((personagem: any) => (
                <CardLocal key={personagem.id} name={personagem.name} type={personagem.type} dimension={personagem.dimension} />
                ))}
            </div>
        </div>
    )
}