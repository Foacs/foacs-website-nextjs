import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Foacs - Accueil</title>
      </Head>
      <Layout active="home">
        <div className="flex flex-col items-center justify-center bg-slate-200 dark:bg-gray-800 dark:text-white text-center py-4 h-80">
          <h1 className="text-5xl">Foacs</h1>
          <h2 className="text-xl italic m-4">
            French Organization of Application CreatorS
          </h2>
          <Link href="/projects">
            <a className="bg-gray-700 dark:bg-white hover:bg-green-700 dark:hover:bg-green-200 font-bold rounded-full py-4 px-8 text-white dark:text-gray-700 transition-colors duration-200">
              Nos projets
            </a>
          </Link>
        </div>

        <section className="container mx-auto px-6 p-10 dark:text-white">
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl font-bold mb-3">Open source</h4>
              <p className="mb-8">
                Foacs s&apos;est donnée comme objectif de mettre ses compétences
                au service du plus grand nombre. Elle met son expertise à
                disposition des autres par le biais de travaux open source.
                Ainsi, quelle que soit la platforme ou les technologies
                employées, les productions de Foacs sont open source.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <a
                href="https://opensource.org/"
                target="_blank"
                rel="noreferrer"
                className="flex justify-center"
              >
                <Image
                  src="https://opensource.org/files/OSI_Standard_Logo.svg"
                  alt="Logo open source initiative"
                  width={206}
                  height={150}
                />
              </a>
              <br />
              <br />
              <i className="text-sm text-center">
                * Ce site n&apos;est ni affilié ni approuvé par l&apos;Open
                Source Initiative
              </i>
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/images/idea.svg"
                alt="Logo idée"
                width={206}
                height={150}
              />
            </div>
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl font-bold mb-3">Soutenir</h4>
              <p>
                Foacs se donne pour objectif de soutenir les idées de projet.
                Chaque initiative est dument étudiée pour apporter le soutien
                nécessaire. Foacs tente d&apos;apporter son expertise et ses
                conseils pour le développement de projets proposés par la
                communauté. Rejoignez-nous sur Discord pour discuter de vos
                idées.
              </p>
            </div>
          </div>
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl font-bold mb-3">Partager</h4>
              <p className="mb-8">
                Profiter de nos savoirs tout en partageant les vôtres. Notre
                volonté est de partager les connaissances et de faire de Foacs
                un pôle de savoir. Ainsi, nous souhaitons offrir la posibilité
                de donner et de reçevoir
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src="/images/sharing.svg"
                alt="Logo partager"
                width={206}
                height={150}
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
