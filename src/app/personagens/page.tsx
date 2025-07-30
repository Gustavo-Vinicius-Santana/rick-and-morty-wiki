"use client";
import { useListPersonagens } from "@/lib/api/hooks/usePersonagens";

export default function page() {
    const {data, isLoading, isError} = useListPersonagens(1);

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error</div>;

    console.log(data);

    return (
        
        <div>
            <h1>Personagens</h1>
        </div>
    )
}