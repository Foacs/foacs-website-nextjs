import Head from "next/head";
import Card from "../../components/card";
import Container from "../../components/container";
import Heading1 from "../../components/heading1";
import Layout from "../../components/layout";
import { getSortedMembersData } from "../../lib/members";

export async function getStaticProps() {
  const allMembersData = getSortedMembersData();
  return {
    props: {
      allMembersData,
    },
  };
}

export default function Projects({ allMembersData }) {
  return (
    <>
      <Head>
        <title>Foacs - Membres</title>
      </Head>
      <Layout active="projects">
        <Container>
          <Heading1>Membres</Heading1>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
            {allMembersData.map(({ id, name, desc }) => (
              <Card key={id} root="members" id={id} name={name} desc={desc} />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  );
}
