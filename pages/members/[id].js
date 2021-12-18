import Head from "next/head";
import Layout from "../../components/layout";
import Heading1 from "../../components/heading1";
import { getMemberData, getAllMemberIds } from "../../lib/members";

export async function getStaticProps({ params }) {
  const memberData = await getMemberData(params.id);
  return {
    props: {
      memberData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllMemberIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Member({ memberData }) {
  return (
    <Layout active="projects">
      <Head>
        <title>Foacs - {memberData.name}</title>
      </Head>
      <div className="container mx-auto px-4 my-2">
        <Heading1>{memberData.name}</Heading1>
        <div dangerouslySetInnerHTML={{ __html: memberData.contentHtml }} />
      </div>
    </Layout>
  );
}
