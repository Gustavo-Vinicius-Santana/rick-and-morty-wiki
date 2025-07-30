"use client";
import { useListLocais } from "@/lib/api/hooks/useLocais";

export default function page(){
    const {data, isLoading, isError} = useListLocais(1);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    console.log(data);
    return(
        <div>
            <h1>locais</h1>
        </div>
    )
}