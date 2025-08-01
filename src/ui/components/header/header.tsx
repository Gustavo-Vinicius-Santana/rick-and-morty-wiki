"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between flex-col md:flex-row gap-4 md:gap-0">
        <h1 className="text-2xl font-bold">
          <Link href="/">Rick and Morty Wiki</Link>
        </h1>

        <nav className="space-x-6 text-sm md:text-2xl text-xl">
          <Link href="/" className="hover:text-green-400 transition">
            Home
          </Link>
          <Link href="/personagens" className="hover:text-green-400 transition">
            Personagens
          </Link>
          <Link href="/episodios" className="hover:text-green-400 transition">
            Episódios
          </Link>
          <Link href="/locais" className="hover:text-green-400 transition">
            Locais
          </Link>
        </nav>

        <div className="w-full md:w-auto flex justify-center">
          <Link href="/busca"
            className="w-1/2 md:w-auto bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition flex justify-center"
          >
            Buscar
          </Link>
        </div>
      </div>
    </header>
  );
}