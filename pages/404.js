import Image from "next/image";
import Link from "next/link";

export default function Custom404() {
  return (
    <div className="bg-indigo-900 relative overflow-hidden h-screen">
      <Image
        src="/images/road.svg"
        alt="bg"
        layout="fill"
        className="absolute h-full w-full object-cover"
      />
      <div className="inset-0 bg-black opacity-25 absolute" />
      <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div className="w-full font-mono flex flex-col items-center relative z-10">
          <h1 className="font-extrabold text-4xl text-center text-white leading-tight mt-4">
            Il semblerait que vous soyez perdu
          </h1>
          <h2 className="font-bold text-xl text-center text-gray-400 leading-tight mt-2">
            <Link href="/">
              <a className="underline">Clique ici</a>
            </Link>{" "}
            pour retourner sur Foacs et nous prétendrons que tout ça n&apos;est
            jamais arrivé.
          </h2>
          <p className="font-extrabold text-8xl my-44 text-white animate-bounce">
            404
          </p>
          <a
            href="https://www.freepik.com/upklyak"
            target="_blank"
            rel="noreferrer"
            className="italic text-sm text-gray-500 fixed bottom-5"
          >
            Design par upklyak / Freepik
          </a>
        </div>
      </div>
    </div>
  );
}
// <a href='https://www.freepik.com/vectors/water'>Water vector created by upklyak - www.freepik.com</a>
