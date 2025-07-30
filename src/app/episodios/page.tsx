"use client";
import { useListEpisodios } from "@/lib/api/hooks/useEpisodios";

export default function page(){
    const {data, isLoading, isError} = useListEpisodios(1);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    console.log(data);
    return(
        <div>
            <h1>Episódios</h1>
        </div>
    )
}