import fs from "fs";
import { getAllProjectIds } from "../lib/projects";

export function getServerSideProps({ res }) {
  const baseUrl = {
    development: "http://localhost:3000",
    production: "https://foacs.fr",
  }[process.env.NODE_ENV];

  const staticPages = fs
    .readdirSync("pages")
    .filter((staticPage) => {
      return ![
        "404.js",
        "_app.js",
        "_document.js",
        "_error.js",
        "sitemap.xml.js",
        "api",
      ].includes(staticPage);
    })

    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath
        .replace("index", "")
        .replace(".js", "")}`;
    });

  const projectIds = getAllProjectIds();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
        ${projectIds.map(({ params }) => {
          return `<url>
              <loc>${baseUrl}/projects/${params.id}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>`;
        })}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default function Sitemap() {
  return <></>;
}
