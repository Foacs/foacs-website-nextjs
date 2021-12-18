import Head from "next/head";
import Card from "../../components/card";
import Container from "../../components/container";
import Heading1 from "../../components/heading1";
import Layout from "../../components/layout";
import { getSortedProjectsData } from "../../lib/projects";

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}

export default function Projects({ allProjectsData }) {
  return (
    <>
      <Head>
        <title>Foacs - Projets</title>
      </Head>
      <Layout active="projects">
        <Container>
          <Heading1>Projets</Heading1>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {allProjectsData.map(({ id, name, desc }) => (
              <Card key={id} id={id} name={name} desc={desc} />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}
