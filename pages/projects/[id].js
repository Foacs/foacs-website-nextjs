import Head from "next/head";
import Layout from "../../components/layout";
import { getAllProjectIds, getProjectData } from "../../lib/projects";
import Heading1 from "../../components/heading1";

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Project({ projectData }) {
  return (
    <Layout active="projects">
      <Head>
        <title>Foacs - {projectData.name}</title>
      </Head>
      <div className="container mx-auto px-4 my-2">
        <Heading1>{projectData.name}</Heading1>
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        <h2>Auteur(e)s</h2>
        <ul>
          {projectData.authors.map((author) => (
            <li key={`au${author}`}>{author}</li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
