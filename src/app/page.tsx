"use client";

import Carrousel from "@/ui/components/carrousel/carrousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-0">
      <section className="bg-gray-800 py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-0 text-center">
          <h1 className="text-3xl font-bold text-white mb-6">Personagens Principais</h1>
          <div className="flex justify-center">
            <Carrousel />
          </div>
        </div>
      </section>

      <section className="bg-gray-800 py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-white mb-4">Sobre a Série</h2>
            <p className="text-gray-300 leading-relaxed">
             Rick and Morty é uma série animada de ficção científica e comédia criada por Justin Roiland e Dan Harmon. A trama gira em torno das aventuras interdimensionais de Rick Sanchez, um cientista brilhante e excêntrico, e seu neto Morty, um adolescente inseguro. Juntos, eles viajam por universos paralelos, enfrentam criaturas bizarras e exploram temas filosóficos, científicos e existenciais — sempre com muito humor ácido e crítica social. A série se destaca pela sua originalidade, inteligência e irreverência, conquistando uma base fiel de fãs ao redor do mundo.
            </p>
          </div>
          <Image
            src="/serie.jpeg"
            alt="Imagem da série"
            width={300}
            height={300}
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/criadores.jpeg"
            alt="Criadores"
            width={300}
            height={300}
            className="rounded-xl shadow-lg order-2 md:order-1"
          />
          <div className="flex-1 order-1 md:order-2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sobre os Criadores</h2>
            <p className="text-gray-700 leading-relaxed">
              Justin Roiland e Dan Harmon são os criadores de Rick and Morty. Justin é conhecido por seu humor irreverente e por dar voz aos personagens principais, Rick e Morty. Ele também trabalhou em outras animações como Solar Opposites. Dan Harmon é roteirista e produtor, famoso por criar a série Community e por seu estilo de narrativa estruturada, como a “story circle”. Juntos, eles uniram criatividade caótica e estrutura narrativa sólida para criar uma das séries animadas mais inovadoras e populares dos últimos tempos.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}