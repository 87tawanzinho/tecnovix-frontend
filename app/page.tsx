import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex justify-center flex-col items-center h-screen">
        <h2 className="text-xl">
          Oi, equipe{" "}
          <span className="text-purple-950  tracking-widest text-2xl">
            Tecnovix
          </span>{" "}
          ❤️
        </h2>
        <p>Obrigado por dar uma oportunidade a esse baiano!</p>
        <Link href={"/dashboard"}>
          <button className="border border-2 border-gray-800 px-8 p-2 rounded mt-8  tracking-widest font-bold">
            Começar
          </button>
        </Link>
      </div>
    </main>
  );
}
