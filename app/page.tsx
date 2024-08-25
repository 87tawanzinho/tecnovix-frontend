import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex  flex-col items-center h-screen">
        <img
          src="https://media.licdn.com/dms/image/v2/D4D16AQEmqtAkwxCW9g/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1698407588040?e=1730332800&v=beta&t=B7CJtTgrj-j9MlboAmue0gpWd2Pnb48YTmZMLBJgbZU"
          alt=""
        />
        <h2 className="text-xl mt-10">
          Oi, equipe{" "}
          <span className="text-purple-950  tracking-widest text-2xl">
            Tecnovix
          </span>{" "}
          ❤️
        </h2>
        <p>Obrigado por dar uma oportunidade a esse baiano!</p>
        <Link href={"/dashboard"}>
          <button className="border border-2 border-gray-800 px-8 p-2 rounded mt-8  tracking-widest font-bold button hover:text-white">
            Começar
          </button>
        </Link>
      </div>
    </main>
  );
}
