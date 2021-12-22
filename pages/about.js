import Head from "next/head";
import Layout from "../components/layout";
import Heading1 from "../components/heading1";
import Container from "../components/container";

export default function About() {
  return (
    <>
      <Head>
        <title>Foacs - À propos</title>
      </Head>
      <Layout active="about">
        <Container full>
          <div className="flex flex-col h-full max-w-2xl mx-auto">
            <Heading1>À propos</Heading1>
            <div className="grow" />
            <p>
              Foacs est une{" "}
              <a
                href="https://www.associations.gouv.fr/1080-association-non-declaree.html"
                target="_blank"
                rel="noreferrer"
                title="Article gouvernemental sur les associations de fait"
                className="text-green-700 dark:text-green-300"
              >
                assocation &#34;de fait&#34;
              </a>{" "}
              qui a pour but de soutenir le développement d&apos;applications
              numériques libres (
              <a
                href="https://opensource.org"
                hrefLang="en"
                target="_blank"
                rel="noreferrer"
                title="Site de l'OpenSource initiative (en anglais)"
                className="text-green-700 dark:text-green-300"
              >
                (en)open source
              </a>
              ). Elle se concentre sur le développement et le soutien, à
              l&apos;aide de ses membres, de projets numériques libres ainsi que
              le partage de connaissances dans ce domaine.
            </p>
            <hr className="my-5" />
            <div className="columns-2 text-center">
              <div>
                <span className="font-bold text-3xl">4</span>
                <br />
                <span className="font-bold">PROJETS SOUTENUS</span>
              </div>
              <div>
                <span className="font-bold text-3xl">2</span>
                <br />
                <span className="font-bold">MEMBRES</span>
              </div>
            </div>
            <div className="grow" />
          </div>
        </Container>
      </Layout>
    </>
  );
}
